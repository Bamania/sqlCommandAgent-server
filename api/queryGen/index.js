import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
// import dbSchema from "./SchemaContext"
import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient();
const queryRoute=express.Router();
dotenv.config();
 const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
 const dbSchema = 
  "CreateTable CREATE TABLE cust_info ( cid SERIAL NOT NULL, nm TEXT NOT NULL, em TEXT NOT NULL, rgn TEXT, sgmt TEXT NOT NULL, jn_dt TIMESTAMP(3) NOT NULL, act BOOLEAN NOT NULL DEFAULT true, CONSTRAINT cust_info_pkey PRIMARY KEY (cid) ); -- CreateTable CREATE TABLE prd ( pid SERIAL NOT NULL, ttl TEXT NOT NULL, ctgr TEXT NOT NULL, c_p DECIMAL(10,2) NOT NULL, r_p DECIMAL(10,2) NOT NULL, stk INTEGER NOT NULL, act BOOLEAN NOT NULL DEFAULT true, CONSTRAINT prd_pkey PRIMARY KEY (pid) ); -- CreateTable CREATE TABLE tr_hd ( oid SERIAL NOT NULL, cid INTEGER NOT NULL, o_dt TIMESTAMP(3) NOT NULL, sts TEXT NOT NULL, ttl DECIMAL(12,2) NOT NULL, py_mtd TEXT NOT NULL, CONSTRAINT tr_hd_pkey PRIMARY KEY (oid) ); -- AddForeignKey ALTER TABLE tr_hd ADD CONSTRAINT tr_hd_cid_fkey FOREIGN KEY (cid) REFERENCES cust_info(cid) ON DELETE RESTRICT ON UPDATE CASCADE; ";





queryRoute.post("/query",async (req,res)=>{
    const userQuery = req.body.query || '';
    
 const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: `
# Database Schema
${dbSchema}

# User Request
${userQuery}

# Task
You are a smart AI designed to answer complex business questions using SQL. The provided database schema may be unclear or incomplete, so you must intelligently infer relationships or perform flexible matching to handle edge cases.
cust_info has the customer names,prd has the product details,and trd_hd has the history of the transactions ! whether it is shipped completed or pending . 

# Instructions
Generate a **JSON array** containing only valid SQL statements that fulfill the user's request. Follow these rules:

1.Return ONLY a valid JSON object with keys: sqlCommands , Do not include any text outside the JSON object (e.g., no explanations or markdown). AND MOST IMPORTANT DONT ADD /n to show the next line in each sql command;
2. Each SQL statement must be syntactically correct and executable basically each sql command that is going to be the element of the arrya should be complete and completely executable ,dont forget to add important semicolons and etc.
3. Do not include any explanations, comments, or markup—only SQL statements inside the JSON array.
4. Separate each SQL command as a separate string inside the array.
5. Use best practices for clean and efficient SQL.
6. If the request is ambiguous, make the most logical assumptions based on the schema.
7. You must handle unclear or messy schema data intelligently and robustly.
8. Do not return any content other than the JSON array of SQL statements.
`,
});

    // interpret the response and generate the sql commands
    // console.log("response",res)
// const jsonOutput= await parseSqlCommands(response.text)
const splitText=response.text.split('`')
const sqlCommands=splitText[3].split('json')[1]
const finalresponse =JSON.parse(sqlCommands)


//     res.json({
//     message:"success",
//     data:finalresponse
// })

})
export default queryRoute;