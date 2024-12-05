// server/models/faq.models.js

const { DataTypes } = require("sequelize");

const { sequelize } = require("../db");

// "FAQ" model
const FAQModel = sequelize.define("FAQ", {
    id: {
        type: DataTypes.INTEGER,      
        autoIncrement: true,          
        primaryKey: true,             
    },
    query: {
        type: DataTypes.TEXT,       
        allowNull: false,             
    },
    answer: {
        type : DataTypes.TEXT,
        allowNull: true,
    },
    visibility:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
},
{
    timestamps: true, 
}
);

module.exports = FAQModel; 
