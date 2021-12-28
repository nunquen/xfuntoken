const { assert } = require("chai")

const XFUNToken = artifacts.require("./XFUNToken.sol")

require("chai")
  .use(require("chai-as-promised"))
  .should()

contract('XFUNToken', ([contractOwner, secondAddress, thirdAddress]) => {
  let xFUNToken

  before(async () => {
    xFUNToken = await XFUNToken.deployed()
  })

  // check if deployment goes ok
  describe('deployment', () => {
    // check if the smart contract is deployed by checking the address of the smart contract
    it('deploys successfully', async () => {
      const address = await xFUNToken.address

      assert.notEqual(address, '')
      assert.notEqual(address, undefined)
      assert.notEqual(address, null)
      assert.notEqual(address, 0x0)
    })

    it('has a message', async() => {
        const message = await xFUNToken.message()
        assert.equal(message, 'Hellow world!')
    })

    // it('no message updates so far', async() => {
    //   const msg_updates = await xFUNToken.msg_updates()
    //   assert.equal(msg_updates, 0)
    // })

    describe('message', () => {
        // Checking if the owner can set a new message (check is setMessage function works)
        it('contract owner sets a message', async () => {
            //Set a new message
            await xFUNToken.setMessage('Hi there!', {from: contractOwner})
            
            //Check new message
            const message = await xFUNToken.message()
            assert.equal('Hi there!', message)
        })

        // Make sure only owner can set a new message and no one else
        it('Address that is not the owner fails to set a new message', async() => {
            await xFUNToken.setMessage('Hi there!', {from: secondAddress})
                .should.be.rejected

            await xFUNToken.setMessage('Hi there!', {from: thirdAddress})
                .should.be.rejected
        })
    })

  })

  
}) 
