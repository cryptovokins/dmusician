var token = artifacts.require("./contracts/token.sol");



contract('token', async (accounts) => {
  var tokenInstance;

  beforeEach('Setup', async () => {
    tokenInstance = await token.deployed() 
   
  })
  it('initializes the contract with the correct values', async() => {
    
    let authors = await tokenInstance.aurhor();
    let companies = await tokenInstance.companies();
    assert.equal(authors, '0xCc3B9382e4585c534189557fB4f3cFE85b170cEE', 'has the correct address');

    let symbol = await tokenInstance.symbol();
    assert.equal(companies, '0x26d844D024020eF5D93Beb9D7bfF145645D00286', 'has the correct address');
   
  })

 
 

});