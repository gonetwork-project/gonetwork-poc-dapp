// //adding endowment to contract: https://github.com/fivedogit/solidity-baby-steps/blob/master/contracts/30_endowment_retriever.sol


// pragma solidity ^0.4.15;

// import "./Verify.sol";
// import "./GoToken.sol";
// //import "./RestrictionModifier.sol";

// //TODO put money into GoToken owner account

// contract Asset is Verify{

//   address gotokenContractAddress;
//   bytes32 signature;
//   bytes32 hash;
//   uint256 cost;
//   uint256 miningReward;
//   address creator;
//   address owner;
//   // TODO pay miner
//   //  modifier payMiner(cost){
//   //  assert(tx.origin.balance > cost * 0.015 );
//   //  GoToken.transfer(block.coinbase, tx.origin, cost * 0.015);
//   //   _;
//   // }
//   // example: content creator makes signature via web3.js
//   // let msg = web3.sha3("hello")
//   // let addr = web3.eth.accounts[1]

//   // let sig = web3.eth.sign(addr, msg)
//   // let r = sig.substr(0,66)
//   // let s = "0x" + sig.substr(66,64)
//   // let v = 28

//   event TransferOwnership(address from, address to, bytes32 hash)
//   //we set the creator to tx.origin because this is called from a factory method
//   function Asset(address _goTokenContractAddress,
//     uint256 _cost,
//     bytes32 _signature,
//     bytes32 _hash){
//     Verify verify = Verify(tx.origin);
//     signature = _signature;
//     hash = _hash;
//     // this.balance = _cost * (uint256)0.05;
//     // this.cost = _cost * (uint256)0.95;

//     //https://ethereum.stackexchange.com/questions/1891/whats-the-difference-between-msg-sender-and-tx-origin
//     //the owner should never be a contract!
//     //TODO:do we want to inject this?
//     creator = tx.origin;
//     owner = tx.origin;

//   }


//   function buyAsset() {
//     if(owner == creator){

//       //stake asset with 5%
//       //transfer to creator
//       //set owner == msg.sender
//     }else{
//       //transfer to creator
//       //transfer to owner

//     }
//     GoToken g = GoToken(gotokenContractAddress);
//     g.transfer(owner,cost);
//     g.transfer(g.minter, cost);

//     TransferOwnership(owner,msg.sender, hash);
//     owner = msg.sender;
//   }


//   function sellable(bool flag){
//     //make asset sellable
//   }






// }


