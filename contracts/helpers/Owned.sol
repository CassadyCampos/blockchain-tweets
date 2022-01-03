pragma solidity ^0.8.11;

abstract contract Owned {
    address ownerAddr;

// constructor runs ONCE when contract is deployed and never again
// therefore we grab the address that's deploying the contract for the very first time
    constructor() {
        ownerAddr = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}