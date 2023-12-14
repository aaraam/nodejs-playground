const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// middleware
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('App is running');
});