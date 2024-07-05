// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const { MessageTemplate } = require('./models');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// Routes
app.get('/templates', async (req, res) => {
    const templates = await MessageTemplate.findAll();
    res.json(templates);
});

app.post('/templates', async (req, res) => {
    const { situation, template } = req.body;
    try {
        const newTemplate = await MessageTemplate.create({ situation, template });
        res.status(201).json(newTemplate);
    } catch (error) {
        console.error('Error creating template:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
