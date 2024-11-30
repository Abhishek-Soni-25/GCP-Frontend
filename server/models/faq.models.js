// server/models/faq.models.js

const { DataTypes } = require("sequelize");

const sequelize = require("../db");

// "FAQ" model
const FAQModel = sequelize.define("FAQ", {
    id: {
        type: DataTypes.INTEGER,      
        autoIncrement: true,          
        primaryKey: true,             
    },
    query: {
        type: DataTypes.STRING,       
        allowNull: false,             
    },
});

module.exports = FAQModel; 
