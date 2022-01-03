const TweetStorage = artifacts.require('TweetStorage')
const utils = require('../utils')
const { assertVMException } = utils

contract('tweets', () => {
    // before(async () => {
    //     const tweetStorage = await TweetStorage.deployed()
    //     await tweetStorage.createTweet(1, "Hello World!")
    // })

    it('can not create tweet without controller', async () => {
        const storage = await TweetStorage.deployed()
        try {
            const tweet = await storage.createTweet(1, 'cassady');
        } catch (err) {
            assertVMException(err);

        }
    })

    it('can get tweet', async () => {
        const storage = await TweetStorage.deployed()
        const tweet = await storage.tweets.call(1)
        assert.equal(parseInt(tweet.id), 1);
        assert.equal(tweet.text, 'Hello World!')
    })
})