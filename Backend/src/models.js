// src/models.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const MessageTemplate = sequelize.define('MessageTemplate', {
    situation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    template: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = { MessageTemplate };
