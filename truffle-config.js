
var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'dash sketch never extend mind adjust robot will inhale want enhance slot';
const path = require("path"); 
var PrivateKeyProvider = require("truffle-privatekey-provider");

require('dotenv').config();

module.exports = {
  compilers: {
     solc: {
       version: '^0.5.8'
     }
  },
  contracts_build_directory: path.join(__dirname, "build/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    ropsten:  {
      network_id: 3,
      host: "localhost",
      port:  8545,
      gas:   2900000
    },
    test: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
      },
      network_id: '*',
    },
   
    rinkeby: {
      provider: process.env.RINKEBY_DEV_PKEY ?
        new PrivateKeyProvider(
          process.env.RINKEBY_DEV_PKEY,
          "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY) :
        null,
      network_id: 4
    },
  }
};