pragma solidity ^0.8.11;

import '../helpers/BaseStorage';

contract UserStorage is BaseStorage {
    mapping(uint => Profile) public profiles;
    
    struct Profile {
        uint id;
        bytes32 username;
    }

    uint latestUserId = 0;


    function createUser(bytes32 _username) public onlyController returns(uint) {
        require(msg.sender == controllerAddr);
        profiles[++latestUserId] = Profile(latestUserId, _username);
        return latestUserId;
    }
}