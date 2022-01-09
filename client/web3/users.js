// we want to create a  function to grab the users info
import { eth, getInstance } from './provider'
import UserStorage from '../web3/artifacts/UserStorage.json'
import UserController from '../web3/artifacts/UserController.json'

// we want a function called createUser that calls the user controllers function 
export const getUserInfo = async (userId) => {
    const storage = await getInstance(UserStorage)
    const profile = await storage.profiles.call(userId)

    return profile
}

export const createUser = async (username) => {
    const controller = await getInstance(UserController)

  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()
    console.log("test");
    // const result2 = await eth.utils.asciiToHex("test");
    // console.log(result2);
    // console.log('tes22', eth.utils.asciiToHex("test"));
    const result = await controller.createUser(
      "0x636865727279",
    {
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error("Err:", err)
  }
}