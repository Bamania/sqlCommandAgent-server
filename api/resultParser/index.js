// build an api that observe the user inputs and the data given by the ai to finally convert it into human like info !
import express from "express"
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config()
const queryParser=express.Router();

queryParser.post("/parser",async(req,res)=>{
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const userQuery=req.body.userQuery;
    const generatedData=req.body.generatedData;
    console.log("first input",userQuery)
    console.log("second inpout",generatedData)
    const parsedGenData=JSON.stringify(generatedData)

const response = await ai.models.generateContent({ 
      model: "gemini-2.0-flash",
      contents: `      
      You are a data analyst. Your job is to read a user query and some data, and return a clear, concise, human-readable answer based only on the data.

USER QUERY:
${userQuery}

DATA:
${parsedGenData}

INSTRUCTIONS:
- Analyze the query and data step-by-step internally.
- Generate ONLY a valid JSON object with the following structure: 

json{
  "finalResponse":"your natural language answer"
} 
  NO matter what dont break the output generation  !
- DO NOT return the raw data, JSON arrays, or objects inside the finalResponse.
- DO NOT escape strings inside the finalResponse.
- DO NOT include line breaks, markdown, formatting, or explanations.
- finalResponse should contain only a plain human-readable summary or answer.

`,
    });

    console.log("parser api response =>>",response.text)
      const splitText = response.text.split('`');
    const jsonData = splitText[3].split('json')[1];
    const finalResponse = JSON.parse(jsonData);
res.json({"message":"success","result":finalResponse})
})
export default queryParser;