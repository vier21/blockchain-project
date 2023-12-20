let Cert = artifacts.require('CertiicateStorage')

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Cert)
};
