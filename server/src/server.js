require("dotenv").config({ path: require("path").join(__dirname, "config", ".env") });
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const posesRouter = require("./routes/poses")
const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 2121;

connectDB();

app.use("/", posesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}, you better catch it!`)
});
