const UserStorage = artifacts.require('UserStorage')

contract('uers', () => {
    it('can create user', async () => {
        const storage = await UserStorage.deployed()
        const username = web3.utils.fromAscii("tristan")
        const tx = await storage.createUser(username);
        // console.log(tx);
        assert.isOk(tx);
    })
})