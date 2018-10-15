const { expectThrow, expectEvent } = require('./helpers')
const Ownable = artifacts.require('./Ownable.sol')

contract('Ownable', ([account, secondAccount]) => {
  beforeEach(async () => {
    this.instance = await Ownable.new({from: account})
  })

  it('has owner', async () => {
    const owner = await this.instance.owner()
    assert.equal(owner, account)
  })

  it('owner can transfer ownership', async () => {
    const { logs } = await this.instance.transferOwnership(secondAccount, {from: account})
    expectEvent(logs, 'OwnershipTransferred', {
      previousOwner: account,
      newOwner: secondAccount
    })
    const owner = await this.instance.owner()
    await this.instance.transferOwnership(account, {from: secondAccount})
    assert.equal(owner, secondAccount)
  })

  it('only the owner can transfer ownership', async () => {
    await expectThrow(this.instance.transferOwnership(account, {from: secondAccount}))
  })
})
