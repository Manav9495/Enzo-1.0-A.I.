Enzo AI Chatbot
Enzo is an interactive AI chatbot built to assist users with conversational queries. Leveraging Google's Gemini API, Enzo provides a seamless chat experience. Users can chat with the bot, review chat history, and interact with a friendly and responsive interface.

Features
Conversational Interaction: Communicate with Enzo in real-time.
User and Bot Messaging: User messages are aligned to the right, while Enzo's responses appear on the left.
Chat History: Keep track of previous conversations, with pagination to navigate between them.
User Restrictions: Limit of 2-5 messages before users are required to log in or create an account.
Pagination: Displays 10 conversations per page, with automatic page transitions.
Interactive UI: Clean and responsive design with gradient effects.
Technologies Used
Frontend:
HTML, CSS, JavaScript (Vanilla JS, DOM Manipulation)
Backend:
Node.js, Express.js
Google Gemini API for AI responses
Libraries:
CORS, Body-parser
Installation
Follow these steps to get Enzo up and running on your local machine:

1. Clone the Repository
bash
Copy code
git clone https://github.com/Manav9495/Enzo-1.0-A.I.
2. Install Dependencies
Navigate into the project directory and install the required dependencies:

bash
Copy code
cd enzo-chatbot
npm install
3. Configure the Google Gemini API
Sign up for access to the Google Gemini API at the Google Cloud Console.
Create a new project, enable the Gemini API, and generate an API key.
Replace the AI_API_KEY in server.js with your generated API key:
js
Copy code
const AI_API_KEY = "YOUR_API_KEY";  // Replace with your actual API key
4. Run the Backend Server
Start the backend server by running:

bash
Copy code
npm start
This will start the Express server on port 3000 (or any other port you specify in the server.js file).

5. Open the Frontend
Once the server is running, open the chat interface by navigating to:

bash
Copy code
http://localhost:3000
6. Interacting with the Chatbot
Message Input: Type your messages in the "Type here..." input box at the bottom of the chat window.
Conversation Flow: Messages will appear with the user on the right side and Enzo's responses on the left.
Account Requirement: After 2-5 messages, users will need to log in or create an account to continue.
Chat History & Pagination
History: On the left panel, you can view a list of previous conversations.
Pagination: The chat history displays a maximum of 10 conversations per page, with automatic pagination once the page limit is reached.
Gradient Effect: Each page of history has a unique gradient background to enhance the design.
Contributing
We welcome contributions! If you'd like to help improve this project, follow these steps:

Fork the repository
Create a new branch for your changes
Commit your changes and push to your forked repository
Submit a pull request
Be sure to follow the project's Code of Conduct and maintain a professional and collaborative tone in your contributions.

Code of Conduct
This project adheres to a Code of Conduct to ensure that everyone in the community has a positive and respectful experience. Please read it before contributing.

License
This project is licensed under the MIT License. See the LICENSE.md file for more details.

Acknowledgements
Google Gemini API: For providing AI-powered conversational responses.
Node.js: For backend server implementation.
Express.js: For setting up the API routes and managing server requests.
Frontend Technologies: HTML, CSS, and JavaScript for building the user interface.
Feel free to make modifications and share your improvements. Enjoy chatting with Enzo! 😄

