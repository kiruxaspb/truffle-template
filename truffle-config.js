require('dotenv').config({ path: '.env'});
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA, MNEMONIC, ETHSKAN } = process.env;

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA),
      network_id: 5,
      gas: 29000000
    }
  },
  mocha: {
    enableTimeouts: false,
    reporter: 'eth-gas-reporter',
    reporterOptions : {
        currency: 'USD',
        onlyCalledMethods: 'true',
        showTimeSpent: 'true'
    }
},
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: ETHSKAN
  },
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
