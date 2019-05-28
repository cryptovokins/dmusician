var token = artifacts.require("./contracts/Token.sol");



contract('DMusician test', async (accounts) => {
  var tokenInstance;
  let owner = '0x76405C422b9B80972663F54F979A1a8db688D95D'
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

    let weis = 1000000000000;
    let weisToAuthor = weis * 0.9;
    let weisToDmusic = weis * 0.1;

    console.log(buyer)
    let balanceBefore = await web3.eth.getBalance(buyer)
    console.log('balanceBefore:' + balanceBefore)
    let contractOff = await tokenInstance.contractOff()



    let receipt = await tokenInstance.buySong(weisToAuthor, weisToDmusic, {
      from: buyer,
      value: weis
    })

    assert.notEqual(receipt.receipt.tx, '0x', 'generate tx');

  })
  
  it('set companies balance , should move weis from companies account to  user account', async () => {

    let companies = await tokenInstance.companies();
    let foundAccountsAmount = 100000000000000000
    let receipt = await tokenInstance.setCompaniesBalance(companies, {

      from: admin,
      value: foundAccountsAmount,
      gas: 60000
    })

    let companiesBalance = await tokenInstance.balanceOf(companies)
    assert.equal(companiesBalance, foundAccountsAmount, 'ok balance');

  });

  it('clickAdvertisement , should move weis from companies account to  user account', async () => {

    let weisForClick = 5000000000000;

    try {
      let buyerBalanceInitial = await web3.eth.getBalance(buyer)


      let companies = await tokenInstance.companies();
 
      let companiesBalanceInitial = await tokenInstance.balanceOf(companies)


      let receipt = await tokenInstance.clickAdvertisement(buyer, weisForClick, {
        from: admin,
        gas: 50000
      })
      let companiesBalanceFinal = await tokenInstance.balanceOf(companies)

      buyerBalanceFinal = await web3.eth.getBalance(buyer)
      console.log('buyerBalanceInitial:' +buyerBalanceInitial)
      console.log('buyerBalanceFinal:' +buyerBalanceFinal)
      let buyerBalanceFinalExpected =  Number(buyerBalanceInitial) + Number(weisForClick);
      let companiesBalanceFinalExpected =  Number(companiesBalanceInitial) - Number(weisForClick);
      console.log('buyerBalanceFinalExpected:' +buyerBalanceFinalExpected)

      assert.equal(Number(buyerBalanceFinalExpected),buyerBalanceFinalExpected, 'buyer balance ok');
      assert.equal(Number(companiesBalanceFinal),companiesBalanceFinalExpected , ' companies balance ok');
      assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Advertisement', 'should be the "Transfer" event');
      assert.equal(receipt.logs[0].args.weis, weisForClick, 'emit weis ok');


    } catch (error) {
      errorHandler(error);
    }
  })

  function errorHandler(error) {
    throw error
  }



});
