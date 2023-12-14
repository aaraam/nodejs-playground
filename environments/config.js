module.exports = {
    testnet: {
        goerli: {},
        sepolia: {},
        mumbai: {},
        binance: {},
        avalanche: {},
    },
    mainnet: {
        ethereum: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
        polygon: {},
        binance: {},
        avalanche: {},
    },
};
