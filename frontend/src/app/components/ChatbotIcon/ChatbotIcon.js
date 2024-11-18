"use client"
// components/ChatbotIcon/ChatbotIcon.js
import React from 'react';
import styles from './ChatbotIcon.module.css';

const ChatbotIcon = () => {
  const handleChatbotClick = () => {
    // Logic to open the chatbot modal or redirect to the chatbot page
    alert('Chatbot clicked!'); // Replace with actual chatbot opening logic
  };

  return (
    <div className={styles.chatbotIcon} onClick={handleChatbotClick}>
        <img src="/chatbot-icon.png" alt="Chatbot Icon" />
    </div>
  );
};

export default ChatbotIcon;
