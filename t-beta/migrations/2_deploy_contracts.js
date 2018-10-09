var BetaToken = artifacts.require("./BetaToken.sol");
var Beta_Wallet_for_HoneyGramm = artifacts.require("./Beta_Wallet_for_HoneyGramm.sol");

module.exports = function(deployer, network, accounts) {
  const _admin = accounts[0];
  
  deployer.deploy(BetaToken)
  .then(function() { return deployer.deploy(Beta_Wallet_for_HoneyGramm, BetaToken.address, _admin )})
 

};
