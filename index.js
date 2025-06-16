const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); 
require("dotenv").config(); 
const app = express();
const PORT = 3002;


app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST", 
  allowedHeaders: "Content-Type", 
}));

app.use(express.json());


const API_KEY = process.env.OPENAI_API_KEY; file

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt); frontend

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      
      const errorText = await response.text();
      console.error("OpenAI API Error: ", errorText);
      return res.status(500).json({ message: "Failed to fetch from OpenAI API" });
    }

    const data = await response.json();

    console.log("OpenAI API response data:", data); 


    if (data && data.choices && data.choices.length > 0) {
      const message = data.choices[0].text.trim();
      res.json({ message });
    } else {
      console.error("OpenAI API returned empty or invalid choices:", data);
      res.status(500).json({ message: "No response from OpenAI API" });
    }
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
