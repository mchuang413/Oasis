"use client";
import { useState } from "react";
import OpenAI from "openai";

const Chat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const apiKey = "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";

  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch('/api/setup', {
        method: "POST"
      })
      const json = await result.json()
      console.log('result: ', json)
    } catch (err) {
      console.log('err:', err)
    }
  }


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSend = async () => {
    // Add the user's message to the messages array
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: query },
    ]);
    // Make a request to OpenAI
    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [
    //     ...messages, // Use the latest state returned by setMessages
    //     { role: "user", content: userInput },
    //   ],
    //   model: "gpt-3.5-turbo",
    // });

    try {
      if(!query) return;
      const result = await fetch('/api/read', {
        method: "POST",
        body: JSON.stringify({ query }),
      })
      const json = await result.json()
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: json.data},
      ]);
      setQuery("");
      //setMessages(json.data)
    } catch (err) {
      console.log('err:', err)
    }

    //const response = chatCompletion.choices[0].message.content;

    // Add Oasis's response to the messages array
    

     // Clear the user input
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-3/5 min-h-3/5">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat ${
                message.role === "assistant" ? "chat-start" : "chat-end"
              } ${index === messages.length - 1 ? "mb-0" : "mb-4"}`}
            >
              <div className="chat-bubble">{message.content}</div>
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            className="flex-1 input input-primary mr-5"
            type="text"
            value={query}
            onChange={handleInputChange}
          />
          <button className="btn btn-accent" onClick={handleSend}>
            Send
          </button>
        </div>
        {/* {<button onClick={createIndexAndEmbeddings} className="btn btn-primary mt-6">Create embeddings DO NOT TOUCH</button>} */}
      </div>
      
    </div>
  );
};

export default Chat;
