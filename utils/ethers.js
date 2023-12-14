const ethers = require('ethers');
const config = require('../environments/config');

const getProvider = (network) => {
    try {
        if (!config[process.env.ENV][network])
            return {
                code: 0,
                message: 'Network not supported',
            };
        const provider = new ethers.providers.JsonRpcProvider(
            config[process.env.ENV][network]
        );
        return provider;
    } catch (error) {
        return {
            code: 0,
            message: error.message,
        };
    }
};

const getBalance = async (address, provider) => {
    try {
        const balance = await provider.getBalance(address);
        return ethers.utils.formatEther(balance);
    } catch (error) {
        return {
            code: 0,
            message: error.message,
        };
    }
};

module.exports = {
    getProvider,
    getBalance,
};
