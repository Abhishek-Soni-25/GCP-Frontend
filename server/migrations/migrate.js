// server/migrations/migrate.js

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require("dotenv").config({ path: path.join(__dirname, "../.env") });

async function runMigrations() {
  try {
    // Connect to MySQL with multipleStatements enabled
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
    });

    // Read and execute the SQL migration file
    const migrationFile = path.join(__dirname, "init.sql");
    const sql = fs.readFileSync(migrationFile, 'utf8');

    await connection.query(sql);
    console.log("Database and tables have been set up successfully.");

    await connection.end();
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
}

runMigrations();
