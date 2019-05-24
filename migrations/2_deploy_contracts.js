var token = artifacts.require("./token.sol");


const config = require('../config/environments')

module.exports = function(deployer) {
  deployer.deploy(token)

};

