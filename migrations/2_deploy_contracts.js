var token = artifacts.require("./Token.sol");


const config = require('../config/environments')

module.exports = function(deployer) {
  deployer.deploy(token)

};

