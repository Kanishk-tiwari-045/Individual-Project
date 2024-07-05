// src/MessageList.jsx
import React, { useEffect, useState } from 'react';
import { fetchTemplates } from './api';

const MessageList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const getTemplates = async () => {
      const templates = await fetchTemplates();
      setTemplates(templates);
    };
    getTemplates();
  }, []);

  return (
    <div>
      <h2>Message Templates</h2>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            <strong>{template.situation}:</strong> {template.template}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
