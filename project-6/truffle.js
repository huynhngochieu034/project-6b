const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "868f575bc99d4006a6a9d754c47101d8";
const mnemonic = "typical drink invite visual spring recall crush process select sausage unhappy soon";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};