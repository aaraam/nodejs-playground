const express = require('express');
const router = express.Router();

const { getWalletBalance } = require('../controllers/wallet');

router.get('/:network/:address', async (req, res) => {
    const { address, network } = req.params;
    const balance = await getWalletBalance(address, network);
    if (balance.code === 0) return res.status(500).json(balance);
    return res.status(200).json(balance);
});