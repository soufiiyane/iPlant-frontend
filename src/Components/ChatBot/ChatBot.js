import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userText, setUserText] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const hasDefaultMessage = useRef(false); // Ref to track if default message is set

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 13 && document.activeElement.id === 'textInput') {
        userResponse();
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [userText, messages]);

  const chatOpen = () => {
    setIsChatOpen(true);
    setIsConversationOpen(false);

    if (!hasDefaultMessage.current) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'admin', text: 'Bonjour ! Je suis l\'assistant virtuel de TechMyTeam. Comment puis-je vous aider aujourd\'hui ? Je peux vous fournir des informations sur notre entreprise, nos membres d\'équipe, nos offres d\'emploi ou vous aider à planifier un rendez-vous pour discuter de l\'embauche de talents ou d\'idées de projets.' }
      ]);
      hasDefaultMessage.current = true;
    }
  };

  const chatClose = () => {
    setIsChatOpen(false);
    setIsConversationOpen(false);
  };

  const generateSessionId = () => {
    return 'session-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  };

  const getSessionId = () => {
    let sessionId = localStorage.getItem('session_id');

    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem('session_id', sessionId);
    }

    return sessionId;
  };

  const userResponse = () => {
    if (userText.trim() === '') {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: userText }
    ]);
    setUserText('');

    setIsWaiting(true);

    const sessionId = getSessionId();
    postData(userText, sessionId);
  };

  const postData = async (userInput, sessionId) => {
    const url = 'https://q1pupwqtya.execute-api.us-east-1.amazonaws.com/dev/';
    const data = {
      inputText: userInput,
      session_id: sessionId
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const responseBody = JSON.parse(result.body);
      const messages = responseBody.messages;

      adminResponse(messages);
    } catch (error) {
      console.error('Error:', error);
      if (error.name === 'TypeError') {
        console.error('Network error or CORS issue');
      }
    } finally {
      setIsWaiting(false);
    }
  };

  const adminResponse = (messages) => {
    const adminMessages = messages.map((message) => ({
      type: 'admin',
      text: message
    }));
    setMessages((prevMessages) => [...prevMessages, ...adminMessages]);
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-bar-open" style={{ display: isChatOpen ? 'none' : 'block' }}>
        <button
          id="chat-open-button"
          type="button"
          className="collapsible close"
          onClick={chatOpen}
        >
          <img src="images/agent-chatbot.png" alt="Sparrow Bird" />
        </button>
      </div>

      <div className="chat-bar-close" style={{ display: isChatOpen ? 'block' : 'none' }}>
        <button type="button"
                onClick={chatClose}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {isChatOpen && !isConversationOpen && (
        <div className="chat-window2" id="chat-window2">
          <div className="hi-there">
            <p className="p1">Bonjour !</p>
            <p className="p2">Les réponses peuvent prendre quelques secondes. Merci de votre patience !</p>
          </div>
          <div className="message-box" id="messageBox">
            {messages.map((message, index) => (
              <div key={index} className={message.type === 'user' ? 'first-chat' : 'second-chat'}>
                {message.type === 'admin' && <div className="circle" id="circle-mar"></div>}
                <p>{message.text}</p>
              </div>
            ))}
            {isWaiting && (
              <div className="second-chat">
                <div className="circle" id="circle-mar"></div>
                <div className="loader-container">
                  <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="input-box">
            <div className="write-reply">
              <input
                className="inputText"
                type="text"
                id="textInput"
                placeholder="Write a reply..."
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                disabled={isWaiting}
              />
            </div>
            <div className="send-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick={userResponse}
                   stroke="currentColor" className="size-6" style={{ cursor: 'pointer' }}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
