// server/db.js

const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: "mysql", 
  }
);

// Checks for existence of database and models.
async function initializeDatabase() {
  try {

    // Ensure the database exists
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log("Database ensured.");
    await connection.end();

    // Dynamically import all models
    const models = {};
    const modelsDir = path.join(__dirname, "models");
    fs.readdirSync(modelsDir)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const model = require(path.join(modelsDir, file));
        models[model.name] = model;
      });

    // Sync all models
    await sequelize.sync({ alter: true }); 
    console.log("All tables have been created or updated.");

    return sequelize;
  } catch (err) {
    console.error("Error initializing database:", err);
    throw err;
  }
}

module.exports = { sequelize, initializeDatabase };
