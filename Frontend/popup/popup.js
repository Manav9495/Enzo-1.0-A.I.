document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-output');
    const historyList = document.getElementById('history-list');
    let pageNumber = 1;
    let conversations = [];
    let currentConversationName = ''; // Store the conversation name based on the first message

    // Handle sending messages
    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        if (!currentConversationName) {
            currentConversationName = userMessage; // First message becomes conversation name
        }

        appendMessage(userMessage, 'user');
        clearInput();

        // Simulate bot response (by calling backend API)
        getBotResponse(userMessage);
    });

    // Function to call the backend API to get bot's response
    function getBotResponse(userMessage) {
        appendMessage("Enzo is typing...", 'enzo'); // Show typing indicator
        
        fetch('http://localhost:3000/api/chat', { // Update URL if necessary
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage }), // Send user message to the API
        })
        .then(response => response.json())
        .then(data => {
            const botResponse = data.response; // Adjust if your API has a different structure
            appendMessage(botResponse, 'enzo'); // Append the bot response
        })
        .catch((error) => {
            console.error('Error:', error);
            appendMessage("Sorry, there was an error. Please try again.", 'enzo'); // Handle errors
        });

        // Add conversation to history (with first message as title)
        if (!conversations.some(c => c.name === currentConversationName)) {
            conversations.push({ name: currentConversationName, messages: [userMessage] });
            updateHistory();
        }
    }

    // Update the chat history with the conversation list (up to 10 per page)
    function updateHistory() {
        historyList.innerHTML = '';
        const startIndex = (pageNumber - 1) * 10;
        const endIndex = startIndex + 10;
        const pageConversations = conversations.slice(startIndex, endIndex);

        pageConversations.forEach((chat, index) => {
            const historyItem = document.createElement('li');
            historyItem.textContent = chat.name + ": " + chat.messages[0]; // Name and first message
            historyList.appendChild(historyItem);
        });
        document.getElementById('page-num').textContent = `Page ${pageNumber}`;
    }

    // Append messages to the chat box
    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'enzo-message');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Clear input field
    function clearInput() {
        userInput.value = '';
    }
});
