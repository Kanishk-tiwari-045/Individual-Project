// src/MessageForm.jsx
import React, { useState } from 'react';
import { createTemplate } from './api';

const MessageForm = () => {
  const [situation, setSituation] = useState('');
  const [template, setTemplate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTemplate = { situation, template };
    await createTemplate(newTemplate);
    // Reset form
    setSituation('');
    setTemplate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Situation:</label>
        <input
          type="text"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Template:</label>
        <textarea
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Template</button>
    </form>
  );
};

export default MessageForm;
