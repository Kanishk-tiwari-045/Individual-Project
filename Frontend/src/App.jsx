// src/App.jsx
import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const App = () => {
  return (
    <div>
      <h1>Professional Message Generator</h1>
      <MessageForm />
      <MessageList />
    </div>
  );
};

export default App;
