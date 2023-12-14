const { getProvider, getBalance } = require('../utils/ethers');

const getWalletBalance = async (address, network) => {
    const provider = getProvider(network);
    if (provider.code === 0) return provider;
    const balance = await getBalance(address, provider);
    if (balance.code === 0) return balance;
    return balance;
};

module.exports = {
    getWalletBalance,
}