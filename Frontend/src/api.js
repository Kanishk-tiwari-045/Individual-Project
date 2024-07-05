// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchTemplates = async () => {
  try {
    const response = await axios.get(`${API_URL}/templates`);
    return response.data;
  } catch (error) {
    console.error('Error fetching templates:', error);
    throw error;
  }
};

export const createTemplate = async (template) => {
  try {
    const response = await axios.post(`${API_URL}/templates`, template);
    return response.data;
  } catch (error) {
    console.error('Error creating template:', error);
    throw error;
  }
};
