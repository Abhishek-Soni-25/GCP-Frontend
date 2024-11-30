// server/db.js
const { Sequelize } = require("sequelize");

// Hardcode the database credentials directly here
const sequelize = new Sequelize(
    'gcd_frontend',  // Database name (hardcoded)
    'root',           // Database user (hardcoded)
    '9069076975',     // Database password (hardcoded)
    {
        host: 'localhost',  // Database host (hardcoded)
        dialect: 'mysql',   // Dialect (MySQL)
    }
);

// Testing of database connection
sequelize.authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.error("Error connecting to the database:", err));

module.exports = sequelize;
