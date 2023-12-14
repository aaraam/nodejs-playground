const { getProvider, getBalance } = require('../utils/ethers');

const getWalletBalance = async (address, network) => {
    const balance = await getBalance(address, network);
    if (balance.code === 0) return balance;
    return balance;
};

module.exports = {
    getWalletBalance,
};
