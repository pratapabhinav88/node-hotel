// import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// import express from "express";
// import bodyParser from "body-parser";

// dotenv.config();

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(bodyParser.json()); // for parsing application/json

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })


// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// async function main() {
//   try {
//     const result = await ai.models.generateContent({
//       model: "gemini-1.5-flash",
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: "How Does AI work?" }],
//         },
//       ],
//     });

//     const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (text) {
//       console.log(text);
//     }

//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// await main();


// app.listen(3000, ()=>{
//   console.log('Server is running on port 3000');
// })



import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ✅ Parse incoming JSON
app.use(express.json());
app.use(bodyParser.json())

// ✅ Gemini Setup
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required in JSON body" });
  }

  try {
    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
    res.json({ response: text || "No response generated." });

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to call Gemini API" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
