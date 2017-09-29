import Web3 from 'web3'
import { default as contract } from 'truffle-contract'
// Import our contract artifacts and turn them into usable abstractions.
import gotoken_artifacts from '../../build/contracts/GoToken.json'

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// MetaCoin is our usable abstraction, which we'll use through the code below.
var GoToken = contract(gotoken_artifacts);

// Bootstrap the MetaCoin abstraction for Use.
GoToken.setProvider(web3.currentProvider);

export const sendCoin = async (transaction) => {

  // let result = MetaCoin.deployed().then(function(instance) {
  //    return instance.sendCoin(transaction.to, transaction.amount, {from: transaction.from});
  // })
  let gotoken = await GoToken.deployed()

  //recall https://truffle.readthedocs.io/en/beta/getting_started/contracts/#transactions
  //truffle function call automatically a transaction!

  let result = await gotoken.transfer(transaction.to, transaction.amount, {from: transaction.from});

  console.log(`result: ${result}`)
  return result

}

export const getBalance = async (address) => {
  try {
    let gotoken = await GoToken.deployed()
    let balance = await gotoken.balanceOf.call(address)

    return balance.toNumber()
  } catch (err) {
    return 'Not Deployed'
  }
}

export const getAsset = async (gameAddress,index) =>{
  try {
    let gotoken = await GoToken.deployed()
    let assetAddress = await gotoken.assets(address,index)

    return assetAddress.toString()
  } catch (err) {
    return 'Not Found'
  }
}
export const getAssetCost = async (address)=>{
  try{
    let sa = await SmartAsset.at(address)
    let cost = await sa.getCost.call()
    return cost.toNumber();
  }catch(err){
    return "no smart asset"
  }
}


