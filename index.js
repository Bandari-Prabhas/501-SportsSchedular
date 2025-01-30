// server.js (Node.js backend)
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); // Import CORS middleware
const app = express();
const PORT = 3002;

// Enable CORS for frontend running on localhost:3000
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from localhost:3000
  methods: "GET,POST", // Allow these methods
  allowedHeaders: "Content-Type", // Allow Content-Type header
}));

app.use(express.json());

// OpenAI API Key
const API_KEY = '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';

// Endpoint to handle chat request
app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt); // Log the prompt received from the frontend

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
      // If the response is not ok (status code is not 2xx), log it
      const errorText = await response.text();
      console.error("OpenAI API Error: ", errorText);
      return res.status(500).json({ message: "Failed to fetch from OpenAI API" });
    }

    const data = await response.json();

    console.log("OpenAI API response data:", data); // Log the full response from OpenAI API

    // Check if 'choices' exists and has a valid response
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
