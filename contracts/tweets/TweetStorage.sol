pragma solidity ^0.8.11;

contract TweetStorage {
    mapping(uint => Tweet) public tweets;

    struct Tweet {
        uint id; 
        string text;
        uint userId;
        uint postedAt;
    }

    uint latestTweetId = 1;

    function createTweet(uint _userId, string memory _text) public returns (uint) {
        latestTweetId++;
        require(latestTweetId > 0, 'must be greater than 0 id');
        tweets[latestTweetId] = Tweet(latestTweetId, _text, _userId, block.timestamp);

        return latestTweetId;
    }
}