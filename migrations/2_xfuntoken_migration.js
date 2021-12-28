//const intExtended = artifacts.require("library");
const xFUNToken = artifacts.require("XFUNToken");

module.exports = function(deployer) {
  //deployer.deploy(intExtended);
  //deployer.link(intExtended, ['xFUNToken']);
  deployer.deploy(xFUNToken, "XFUNToken", "XFUN", 0, 1000);

};  


