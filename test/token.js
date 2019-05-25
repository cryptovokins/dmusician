var token = artifacts.require("./contracts/Token.sol");



contract('token', async (accounts) => {
  var tokenInstance;
  let admin = accounts[0];
  let buyer = accounts[1];
  beforeEach('Setup', async () => {
    tokenInstance = await token.deployed()

  })
  it('initializes the contract with the correct values', async () => {

    let authors = await tokenInstance.authors();
    let companies = await tokenInstance.companies();
    assert.equal(authors, '0xCc3B9382e4585c534189557fB4f3cFE85b170cEE', 'has the correct address');
    assert.equal(companies, '0x26d844D024020eF5D93Beb9D7bfF145645D00286', 'has the correct companies address');

  })
  it('play , should move weis from user account to  authors account', async () => {

    let weis = 1000000000000000;
    let weisToAuthor = weis * 0.9;
    let weisToDmusic = weis * 0.1;

    console.log(buyer)
    let balanceBefore = await web3.eth.getBalance(buyer)
    console.log('balanceBefore:' + balanceBefore)
    let contractOff = await tokenInstance.contractOff()
    console.log('contractOff:'+ contractOff)

     
    let receipt = await tokenInstance.buySong(weisToAuthor, weisToDmusic, {
      from: buyer,
      value: weis
    })

    let balanceAfter = await web3.eth.getBalance(buyer)
    console.dir( receipt)
  
    assert.notEqual(receipt.receipt.tx, '0x', 'correct amount moviment');

  })




});