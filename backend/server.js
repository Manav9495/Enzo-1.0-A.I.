const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = 3000;

// Your Gemini API Key
const AI_API_KEY = "AIzaSyAim-q1lxXBnYtgZX2reSkPHCiPGxg_COE"; // Replace with your actual API key

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Create a GoogleGenerativeAI instance
const genAI = new GoogleGenerativeAI(AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Handle chat requests
app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        // Generate content using Gemini API
        const result = await model.generateContent(userMessage);
        const botResponse = result.response.text(); // Get the response text

        res.json({ response: botResponse }); // Send response back to the frontend
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        res.status(500).json({ response: "Sorry, there was an error. Please try again." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
