pragma solidity ^0.5.8;

// ----------------------------------------------------------------------------
// DMusic token contract
//
//
// (c) by Viking  / 2019. The MIT Licence.
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Safe maths
// ----------------------------------------------------------------------------
 
contract SMath {
    function safeAdd(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function safeSub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function safeMul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function safeDiv(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}



// ----------------------------------------------------------------------------
// Contract function to receive approval and execute function in one call
//
// Borrowed from Token
// ----------------------------------------------------------------------------
contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 tokens, address token, bytes memory data) public;
}


// ----------------------------------------------------------------------------
// Owned contract
// ----------------------------------------------------------------------------
contract Owned {
    address public owner;
    address public newOwner;

    event OwnershipTransferred(address indexed _from, address indexed _to);

    function Constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        newOwner = _newOwner;
    }
    function acceptOwnership() public {
        require(msg.sender == newOwner);
        emit OwnershipTransferred (owner, newOwner);
        owner = newOwner;
        newOwner = address(0);
    }
}


// ----------------------------------------------------------------------------
// ERC20 Token, with the addition of symbol, name and decimals and assisted
// token transfers
// ----------------------------------------------------------------------------
contract Token is Owned, SMath {

    uint256 private _guardCounter = 1;
    address payable public authors;
    address payable public companies;
    bool public contractOff;

    event Buy( address indexed to, uint tokens);
    event Advertisement( address indexed to, uint tokens);
    event Founded(address indexed companies, uint tokens);

    event loguint256(uint256 err);
    event logaddress(address err);
    mapping(address => uint) balances;


     modifier nonReentrant() {
        _guardCounter += 1;
        uint256 localCounter = _guardCounter;
        _;
        require(localCounter == _guardCounter, "ReentrancyGuard: reentrant call");
    }
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    constructor() public Token(){
        authors = 0xCc3B9382e4585c534189557fB4f3cFE85b170cEE;
        companies = 0x26d844D024020eF5D93Beb9D7bfF145645D00286;
        contractOff = false;

    }


    // ------------------------------------------------------------------------
    // Get the token balance for account tokenOwner
    // ------------------------------------------------------------------------
    function balanceOf(address tokenOwner) public  view returns (uint balance) {
        return balances[tokenOwner];
    }


    // ------------------------------------------------------------------------
    // set status contract
    // ------------------------------------------------------------------------
    function setStateContract(bool value) public onlyOwner returns (bool success)  {
        contractOff = value;
        return true;
    }


    // ------------------------------------------------------------------------
    // buy song:
    // send the payment from user account to author account
    // ------------------------------------------------------------------------
    function buySong( uint256 weisToAuthor, uint256 weisToDmusic) public payable returns (bool success) {
        require(contractOff == false);

        balances[owner] = safeAdd(balances[owner], weisToDmusic);
        balances[authors] = safeAdd(balances[authors], weisToAuthor);
        authors.transfer(weisToAuthor);
        emit Buy(authors, weisToAuthor);

        return true;
    }
    // ------------------------------------------------------------------------
    // clickAdvertisement:
    // send award to customer
    // ------------------------------------------------------------------------
    function clickAdvertisement(address payable to,  uint256 weis ) public  returns (bool success) {
        require(contractOff == false);

        balances[companies] = safeSub(balances[companies], weis);
        to.transfer(weis);
        emit Advertisement(companies, weis);

        return true;
    }
    // ------------------------------------------------------------------------
    // clickAdvertisement:
    // send award to customer
    // ------------------------------------------------------------------------

    function foundMyContract(uint256 weis) public payable returns (bool success) {
        require(contractOff == false);

        balances[companies] = safeAdd(balances[companies], weis);
        emit Founded(companies, weis);

        return true;

    }
  // ------------------------------------------------------------------------
    // kill:
    // destroy contract
    // ------------------------------------------------------------------------
    function kill() public onlyOwner {
       selfdestruct(msg.sender);

    }

 
}
