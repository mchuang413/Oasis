//useState can only be run in a client component
'use client'
import React, { useState } from 'react';

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([    
    { type: 'user', content: 'Hello, ChatGPT!' },
    { type: 'bot', content: 'Hi there! How can I assist you today?' },
  ]);

  const handleUserMessage = async () => {
    // Assuming you have an API endpoint and function to send user messages to ChatGPT
    const apiEndpoint = 'https://api.openai.com/v1/messages';
    
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${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}`, // Use your OpenAI API key
        },
        body: JSON.stringify({ userMessage }),
      });

      const { botResponse } = await response.json();

      // Update the chatMessages state with the user message and bot response
      setChatMessages([
        ...chatMessages,
        { type: 'user', content: userMessage },
        { type: 'bot', content: botResponse },
      ]);

      // Clear the user message input field
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    }
  };

  return (
    <div>
      <div className="chat">
        {chatMessages.map((message, index) => (
          <div key={index} className={`chat-${message.type}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="chat-bubble">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="message-box">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
