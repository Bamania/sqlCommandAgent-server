// build an api that observe the user inputs and the data given by the ai to finally convert it into human like info !
import express from "express"
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { asyncHandler, AppError } from "../../lib/error-handler.js";

dotenv.config()
const queryParser = express.Router();

queryParser.post("/parser", asyncHandler(async(req, res) => {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const userQuery = req.body.userQuery;
    const generatedData = req.body.generatedData;
    
    if (!userQuery || !generatedData) {
      throw new AppError("Missing required parameters: userQuery or generatedData", 400);
    }
    
    console.log("first input", userQuery);
    console.log("second input", JSON.stringify(generatedData).substring(0, 100) + "..."); // Log truncated for readability
    const parsedGenData = JSON.stringify(generatedData);

    try {
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

      console.log("parser api response =>>", response.text);
      
      // Handle JSON parsing safely
      try {
        // Try using standard JSON extraction first
        const splitText = response.text.split('`');
        const jsonData = splitText.length > 3 ? splitText[3].split('json')[1] : null;
        
        // If standard extraction fails, look for JSON anywhere in the response
        let finalResponse;
        if (jsonData) {
          finalResponse = JSON.parse(jsonData);
        } else {
          // Try to find a JSON object directly in the response
          const match = response.text.match(/{[\s\S]*"finalResponse"[\s\S]*}/);
          if (match) {
            finalResponse = JSON.parse(match[0]);
          } else {
            throw new Error("Could not extract valid JSON from AI response");
          }
        }
        
        res.json({"message":"success", "result": finalResponse});
      } catch (parseError) {
        throw new AppError("Failed to parse AI response: " + parseError.message, 500, {
          aiResponseSummary: response.text.substring(0, 200) + "..."
        });
      }
    } catch (aiError) {
      throw new AppError("AI service error: " + aiError.message, 500);
    }
}));

export default queryParser;