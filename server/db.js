// server/db.js

const { Sequelize } = require("sequelize");
require("dotenv").config();

// Database credentials
const sequelize = new Sequelize(
    process.env.DB_NAME,      
    process.env.DB_USER,      
    process.env.DB_PASSWORD,  
    {
        host: process.env.DB_HOST, 
        dialect: "mysql",          
    }
);

// Testing of database connection
sequelize.authenticate()
    .then(() => console.log("Database connected...")) 
    .catch((err) => console.error("Error connecting to the database:", err)); 


module.exports = sequelize;