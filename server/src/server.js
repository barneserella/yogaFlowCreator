require("dotenv").config({ path: require("path").join(__dirname, "config", ".env") });
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 2121;

connectDB();

// TEST
app.get('/api', () => {
    console.log('Status: OK!')
});

app.listen(PORT, () => {
    console.log('Server is running, you better catch it!')
});
