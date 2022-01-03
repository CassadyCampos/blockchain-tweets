pragma solidity ^0.8.11;

import '../helpers/BaseStorage.sol';

contract UserStorage is BaseStorage {
    mapping(uint => Profile) public profiles;
    
    struct Profile {
        uint id;
        bytes32 username;
    }

    uint latestUserId = 0;


    function createUser(bytes32 _username) public onlyController returns(uint) {
        profiles[++latestUserId] = Profile(latestUserId, _username);
        return latestUserId;
    }
}