const express = require('express');
const dotenv = require('dotenv');

const walletRoutes = require('./routes/wallet');

const app = express();

dotenv.config();

// middleware
app.use(express.json());

// server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// routes
app.get('/', (req, res) => {
    res.send('App is running');
});

app.use('/wallet', walletRoutes);



