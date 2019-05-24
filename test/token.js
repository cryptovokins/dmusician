var token = artifacts.require("./contracts/token.sol");



contract('token', async (accounts) => {
  var tokenInstance;

  beforeEach('Setup', async () => {
    tokenInstance = await token.deployed() 
   
  })
  it('initializes the contract with the correct values', async() => {
    
    let name = await tokenInstance.name();
    assert.equal(name, 'DMusic', 'has the correct name');

    let symbol = await tokenInstance.symbol();
    assert.equal(symbol, 'DM', 'has the correct symbol');
   
  })

  it('allocates the initial supply upon deployment', async() => {

    let totalSupply = await tokenInstance.totalSupply.call()
    let _totalSupply = web3.utils.fromWei(totalSupply.toString(), "ether" )
   // let _totalSupply = web3.utils.fromWei(totalSupply, 'ether')
    assert.equal(_totalSupply, 100000000, 'sets the total supply to 1,000,000');
    
    let adminBalance = await tokenInstance.balanceOf.call(accounts[0]);
   // let _adminBalance = web3.utils.fromWei(adminBalance, 'ether')
    assert.equal(web3.utils.fromWei(adminBalance.toString(), "ether" ), 100000000, 'it allocates the initial supply to the admin account');
   
  });

  it('transfers token ownership', async() => {

    try{
      let tokens = 99999999999999
      await tokenInstance.transfer.call(accounts[1],tokens );

    }catch(error) {
      assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
    }

    let amount = web3.utils.toWei('25000', 'ether')
    let rest = web3.utils.toWei('75000', 'ether')
    let success = await tokenInstance.transfer.call(accounts[1], amount, { from: accounts[0] });
    assert.equal(success, true, 'it returns true');
    
    
    let receipt = await tokenInstance.transfer(accounts[1], amount, { from: accounts[0] });
    assert.equal(receipt.logs.length, 1, 'triggers one event');
    assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
    assert.equal(receipt.logs[0].args.from, accounts[0], 'logs the account the tokens are transferred from');
    assert.equal(receipt.logs[0].args.to, accounts[1], 'logs the account the tokens are transferred to');
    assert.equal(receipt.logs[0].args.tokens, amount, 'logs the transfer amount');
    
    let balance1 = await tokenInstance.balanceOf.call(accounts[1]);
    assert.equal( web3.utils.fromWei(balance1.toString()), 25000, 'adds the amount to the receiving account');
    
    let balance0 = await tokenInstance.balanceOf.call(accounts[0]);
    assert.equal(web3.utils.fromWei(balance0.toString()), 99975000, 'deducts the amount from the sending account');
  });

  it('approves tokens for delegated transfer', async() => {
    let tokenInstance = await token.deployed();
   
    let amount = web3.utils.toWei('100', 'ether')

    let success = await tokenInstance.approve.call(accounts[1], amount);
    assert.equal(success, true, 'it returns true');
    
    let receipt =  await tokenInstance.approve(accounts[1], amount , { from: accounts[0] });
    assert.equal(receipt.logs.length, 1, 'triggers one event');
    assert.equal(receipt.logs[0].event, 'Approval', 'should be the "Approval" event');
    assert.equal(receipt.logs[0].args.tokenOwner, accounts[0], 'logs the account the tokens are authorized by');
    assert.equal(receipt.logs[0].args.spender, accounts[1], 'logs the account the tokens are authorized to');
    assert.equal(receipt.logs[0].args.tokens, amount, 'logs the transfer amount');
    
    let allowance =  await tokenInstance.allowance.call(accounts[0], accounts[1]);
    let allow = web3.utils.fromWei(allowance.toString())
    assert.equal(allow, 100, 'stores the allowance for delegated trasnfer');
    
  });

  it('handles delegated token transfers', async() => {
    
    let fromAccount = accounts[2];
    let toAccount = accounts[3];
    let spendingAccount = accounts[4];
    
    let amount = web3.utils.toWei('100', 'ether')
    let spendingAmount = web3.utils.toWei('10', 'ether')
    let largerThanApproveAmount = web3.utils.toWei('20', 'ether')
    let HeavyAmount = web3.utils.toWei('100000000', 'ether')

    // Transfer some tokens to fromAccount
    await tokenInstance.transfer(fromAccount, amount, { from: accounts[0] });
   
    // Approve spendingAccount to spend 10 tokens form fromAccount
    await tokenInstance.approve(spendingAccount, spendingAmount, { from: fromAccount });
    
    // Try transferring something larger than the sender's balance
    try{ 
        await tokenInstance.transferFrom(fromAccount, toAccount, HeavyAmount, { from: spendingAccount });
    
    }catch(error) {
      assert(error.message.indexOf('revert') >= 0, 'cannot transfer value larger than balance');
    }

    // Try transferring something larger than the approved amount
    try{
        await tokenInstance.transferFrom(fromAccount, toAccount, largerThanApproveAmount, { from: spendingAccount });

    }catch(error) {
      assert(error.message.indexOf('revert') >= 0, 'cannot transfer value larger than approved amount');
    }

    let success = await tokenInstance.transferFrom.call(fromAccount, toAccount, spendingAmount, { from: spendingAccount });
    assert.equal(success, true);
    
    let receipt = await tokenInstance.transferFrom(fromAccount, toAccount, spendingAmount, { from: spendingAccount });
    assert.equal(receipt.logs.length, 1, 'triggers one event');
    assert.equal(receipt.logs[0].event, 'Transfer', 'should be the "Transfer" event');
    assert.equal(receipt.logs[0].args.from, fromAccount, 'logs the account the tokens are transferred from');
    assert.equal(receipt.logs[0].args.to, toAccount, 'logs the account the tokens are transferred to');
    assert.equal(web3.utils.fromWei(receipt.logs[0].args.tokens.toString(), "ether" ) , 10, 'logs the transfer amount');

    let balanceFrom = await tokenInstance.balanceOf.call(fromAccount);
    balanceFrom = web3.utils.fromWei(balanceFrom.toString())
    
    assert.equal(balanceFrom, 90, 'deducts the amount from the sending account');
    
    let balanceTo = await tokenInstance.balanceOf.call(toAccount);
    balanceTo = web3.utils.fromWei(balanceTo.toString())
    assert.equal(balanceTo, 10, 'adds the amount from the receiving account');
    
    let allowance = await tokenInstance.allowance.call(fromAccount, spendingAccount);
    let allow = web3.utils.fromWei(allowance.toString())
     assert.equal(allow, 0, 'deducts the amount from the allowance');
  });
});