var ECVerify = artifacts.require("./ECVerify.sol");

contract('ECVerify', function(accounts) {
  it("should verify message", function() {
    // Get a reference to the deployed MetaCoin contract, as a JS object.
    ECVerify.deployed().then(function(instance){
        let addr = web3.eth.accounts[0]
        let msg = 'hello world'
        let hash = web3.sha3(msg)
        let signature = web3.eth.sign(addr, hash)

        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = sha3(prefix, hash);

        return instance.ecverify.call(prefixedHash,signature,addr);

    }).then(result=>{
            assert.equal(result, true, "Signatures match");
    }).catch(e => {
        console.error(e)
    });;

  });

   it("should fail message", function() {
    // Get a reference to the deployed MetaCoin contract, as a JS object.
    ECVerify.deployed().then(function(instance){
        let addr = web3.eth.accounts[0]
        let msg = 'hello world'
        let hash = web3.sha3(msg)
        let signature = web3.eth.sign(addr, hash)


        return instance.ecverify.call(hash,signature,web3.eth.accounts[1]);

    }).then(result=>{
        assert(result,false, "Signature doesnt match");
    }).catch(e => {
        console.error(e)
    });

  });
});


