import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import prisma from '../../lib/prisma.js';
import fetchAllTableData from "./readTable.js";

const queryRoute = express.Router();
dotenv.config();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dbSchema = "CreateTable CREATE TABLE cust_info ( cid SERIAL NOT NULL, nm TEXT NOT NULL, em TEXT NOT NULL, rgn TEXT, sgmt TEXT NOT NULL, jn_dt TIMESTAMP(3) NOT NULL, act BOOLEAN NOT NULL DEFAULT true, CONSTRAINT cust_info_pkey PRIMARY KEY (cid) ); -- CreateTable CREATE TABLE prd ( pid SERIAL NOT NULL, ttl TEXT NOT NULL, ctgr TEXT NOT NULL, c_p DECIMAL(10,2) NOT NULL, r_p DECIMAL(10,2) NOT NULL, stk INTEGER NOT NULL, act BOOLEAN NOT NULL DEFAULT true, CONSTRAINT prd_pkey PRIMARY KEY (pid) ); -- CreateTable CREATE TABLE tr_hd ( oid SERIAL NOT NULL, cid INTEGER NOT NULL, o_dt TIMESTAMP(3) NOT NULL, sts TEXT NOT NULL, ttl DECIMAL(12,2) NOT NULL, py_mtd TEXT NOT NULL, CONSTRAINT tr_hd_pkey PRIMARY KEY (oid) ); -- AddForeignKey ALTER TABLE tr_hd ADD CONSTRAINT tr_hd_cid_fkey FOREIGN KEY (cid) REFERENCES cust_info(cid) ON DELETE RESTRICT ON UPDATE CASCADE; ";

queryRoute.post("/query", async (req, res) => {
  try {
    const userQuery = req.body.userQuery;
    console.log("Query by the user:", userQuery);
    
    // Get all table data
    const tables = await fetchAllTableData();
    console.log("Tables data fetched successfully");
    
    // Format table data for better readability in the prompt
    const formattedTables = JSON.stringify(tables, null, 2);
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
# SQL Query Generator Assistant

## IMPORTANT: SCOPE VALIDATION FIRST
Before generating any SQL, you MUST determine if the user's question is relevant to the business database and data analysis. 

### VALID QUESTIONS include:
- Questions about customers, products, transactions, orders, sales
- Data analysis requests (summaries, counts, averages, trends)  
- Business insights and reporting queries
- Filtering, sorting, or aggregating database information
- Questions that can be answered using the available tables (cust_info, prd, tr_hd)

### INVALID QUESTIONS include:
- General knowledge questions unrelated to the database
- Personal conversations, greetings, or casual chat
- Technical questions not related to this specific database
- Requests for information not contained in the database
- Questions about topics outside of business/sales/customer data
- Requests to modify, delete, or alter database structure
- Questions about external systems, APIs, or other databases

## RESPONSE PROTOCOL:
1. **First, evaluate if the question is relevant to the database and business analysis**
2. **If IRRELEVANT**: Return the "out_of_scope" response format immediately
3. **If RELEVANT**: Proceed with SQL generation

## User Question
"${userQuery}"

## Database Schema
${dbSchema}

## Database Tables Structure
The database contains three main tables:

1. **cust_info (Customer Information)**
   - cid (SERIAL, PRIMARY KEY): Customer ID
   - nm (TEXT, NOT NULL): Customer name
   - em (TEXT, NOT NULL): Customer email
   - rgn (TEXT): Customer region
   - sgmt (TEXT, NOT NULL): Customer segment
   - jn_dt (TIMESTAMP, NOT NULL): Join date
   - act (BOOLEAN, DEFAULT true): Active status

2. **prd (Product Catalog)**
   - pid (SERIAL, PRIMARY KEY): Product ID
   - ttl (TEXT, NOT NULL): Product title/name
   - ctgr (TEXT, NOT NULL): Product category
   - c_p (DECIMAL(10,2), NOT NULL): Cost price
   - r_p (DECIMAL(10,2), NOT NULL): Retail price
   - stk (INTEGER, NOT NULL): Stock quantity
   - act (BOOLEAN, DEFAULT true): Active status

3. **tr_hd (Transaction Header)**
   - oid (SERIAL, PRIMARY KEY): Order ID
   - cid (INTEGER, FOREIGN KEY -> cust_info.cid): Customer ID
   - o_dt (TIMESTAMP, NOT NULL): Order date
   - sts (TEXT, NOT NULL): Status (e.g., 'shipped', 'completed', 'pending')
   - ttl (DECIMAL(12,2), NOT NULL): Total order amount
   - py_mtd (TEXT, NOT NULL): Payment method

## Relationships
- tr_hd.cid references cust_info.cid (Each transaction belongs to a customer)

## Current Database Content
${formattedTables}

## Data Type Handling Requirements
Always apply these transformations in your SQL queries to prevent serialization errors:

1. **ID Fields (Serial/BigInt):**
   - Convert: CAST(cid AS TEXT) AS cid
   - Convert: CAST(pid AS TEXT) AS pid
   - Convert: CAST(oid AS TEXT) AS oid

2. **Decimal/Numeric Fields:**
   - Convert: CAST(c_p AS DOUBLE PRECISION) AS c_p
   - Convert: CAST(r_p AS DOUBLE PRECISION) AS r_p
   - Convert: CAST(ttl AS DOUBLE PRECISION) AS ttl

3. **Timestamp Fields:**
   - Convert: TO_CHAR(jn_dt, 'YYYY-MM-DD HH24:MI:SS') AS jn_dt
   - Convert: TO_CHAR(o_dt, 'YYYY-MM-DD HH24:MI:SS') AS o_dt

4. **Boolean Fields:**
   - Convert: CASE WHEN act THEN 'true' ELSE 'false' END AS act

## OUTPUT FORMATS:

### For RELEVANT database questions:
\`\`\`json
{
  "sqlCommands": [
    "SQL_STATEMENT_1;",
    "SQL_STATEMENT_2;"
  ]
}
\`\`\`

### For IRRELEVANT/OUT-OF-SCOPE questions:
\`\`\`json
"sqlCommands": [
    "message;"
    
  ]
\`\`\`

## INSTRUCTIONS:
1. **FIRST**: Determine if the question is relevant to the database and business analysis
2. **IF IRRELEVANT**: Return the out_of_scope response immediately  
3. **IF RELEVANT**: Analyze the user's question carefully, examine the database schema and current data, generate appropriate SQL query/queries
4. **ALWAYS** apply the data type handling rules to ALL relevant columns
5. Return ONLY a valid JSON object

## Examples of Properly Formatted SQL Queries (for relevant questions):

1. Get top 5 products by price:
\`\`\`sql
SELECT CAST(pid AS TEXT) AS pid, ttl, ctgr, CAST(r_p AS DOUBLE PRECISION) AS r_p FROM prd ORDER BY r_p DESC LIMIT 5;
\`\`\`

2. Get customers with their order counts:
\`\`\`sql
SELECT CAST(c.cid AS TEXT) AS cid, c.nm, c.em, COUNT(CAST(t.oid AS TEXT)) AS order_count FROM cust_info c LEFT JOIN tr_hd t ON c.cid = t.cid GROUP BY c.cid, c.nm, c.em;
\`\`\`

3. Get recent transactions:
\`\`\`sql
SELECT CAST(oid AS TEXT) AS oid, CAST(cid AS TEXT) AS cid, TO_CHAR(o_dt, 'YYYY-MM-DD HH24:MI:SS') AS o_dt, sts, CAST(ttl AS DOUBLE PRECISION) AS ttl FROM tr_hd ORDER BY o_dt DESC LIMIT 10;
\`\`\`
`,
    });

    // Parse the response to get SQL commands or out-of-scope message
    const responseText = response.text;
    
    // Extract the JSON part from the response
    const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) || 
                     responseText.match(/{[\s\S]*}/);
                     
    if (!jsonMatch) {
      throw new Error("Could not extract valid JSON from AI response");
    }
    
    let responseJson;
    try {
      // Try to parse the extracted JSON
      responseJson = JSON.parse(jsonMatch[0].replace(/```json|```/g, '').trim());
    } catch (e) {
      try {
        // If that fails, look for just the JSON object anywhere in the response
        const jsonObjectMatch = responseText.match(/{[\s\S]*}/);
        if (jsonObjectMatch) {
          responseJson = JSON.parse(jsonObjectMatch[0]);
        } else {
          throw new Error("Invalid JSON format in AI response");
        }
      } catch (innerError) {
        throw new Error(`Failed to parse JSON: ${innerError.message}`);
      }
    }
    
    // Check if the question is out of scope
    if (responseJson.out_of_scope) {
      return res.status(400).json({
        message: responseJson.message || "This question is outside the scope of the database query system.",
        out_of_scope: true
      });
    }
    
    // Validate that we have SQL commands for in-scope questions
    if (!responseJson || !Array.isArray(responseJson.sqlCommands)) {
      throw new Error("AI response did not contain valid SQL commands array");
    }
    
    console.log("Generated SQL commands:", responseJson);
    
    // Execute each SQL command using Prisma's raw query
    let finalResult = null;
    let executedCommands = [];
    
    for (const sqlCommand of responseJson.sqlCommands) {
      try {
        // Execute the raw SQL directly on the database
        const result = await prisma.$queryRawUnsafe(sqlCommand);
        finalResult = result; // Keep updating with latest result
        executedCommands.push({
          command: sqlCommand,
          success: true
        });
      } catch (error) {
        // If any command fails, return error immediately
        return res.status(500).json({
          message: "Error executing SQL commands",
          failedCommand: sqlCommand,
          error: error.message,
          executedCommands: executedCommands
        });
      }
    }
    
    res.json({
      message: "Query executed successfully",
      result: finalResult,
      commandsExecuted: executedCommands.length
    });
  } catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({
      message: "Error processing your request",
      error: error.message
    });
  }
});

export default queryRoute;