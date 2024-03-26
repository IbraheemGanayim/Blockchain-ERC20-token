const IbraToken = artifacts.require("IbraToken");

module.exports = function(deployer) {
  deployer.deploy(IbraToken);
};