var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
//var RestrictionModifier = artifacts.require("./RestrictionModifier.sol");
var Verify = artifacts.require("./Verify.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  //deployer.deploy(RestrictionModifier);
  deployer.deploy(Verify);

};
