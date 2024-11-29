const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const FAQ = sequelize.define("faq", {
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

module.exports = FAQ;
