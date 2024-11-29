const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const sequelize = require("./db"); 

const faqModels = require("./models/faq.models"); 

const baseRoute = require("./routes/base.routes"); 
const faqRoute = require("./routes/faq.routes"); 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/", baseRoute);
app.use("/", faqRoute);

sequelize.sync({ alter: true }) 
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error syncing the database:", err);
    });
