// server/models/contactus.models.js

const { DataTypes } = require("sequelize");

const { sequelize } = require("../db");

// "Contact Us" model
const ContactUsModel = sequelize.define("contactus", {
    id: {
        type: DataTypes.INTEGER,      
        autoIncrement: true,          
        primaryKey: true,             
    },
    name: {
        type: DataTypes.STRING,       
        allowNull: false,             
    },
    email: {
        type: DataTypes.STRING,       
        allowNull: false,             
    },
    phone: {
        type: DataTypes.STRING,       
        allowNull: false,             
    },
    country: {
        type: DataTypes.STRING,       
        allowNull: false,             
    },
    message: {
        type: DataTypes.TEXT,       
        allowNull: false,             
    },
});

module.exports = ContactUsModel; 
