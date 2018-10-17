const { expectThrow, expectEvent } = require('./helpers')
const BetaToken = artifacts.require('./BetaToken.sol')
const BigNumber = web3.BigNumber

contract('BetaToken', ([account, secondAccount, thirdAccount, forthAccount]) => {
  beforeEach(async () => {
    this.instance = await BetaToken.new({from: account})
  })
 
  it('cannot receive ether', async () => {
    await expectThrow(this.instance.send(1, {from: account}));
  })

  it('token transfer should be work only when move has been started', async () => {
    await expectThrow(this.instance.transfer(secondAccount, 1, {from: account}))
    await expectThrow(this.instance.transferFrom(account, secondAccount, 1, {from: account}))
    await expectThrow(this.instance.transfer(secondAccount, 1, {from: account}))
    await expectThrow(this.instance.transferFrom(account, secondAccount, 1, {from: account}))
  })


  it('owner can let the tokens move', async () => {
    {
       await this.instance.startMove({from: account})
      
      assert.isTrue(await this.instance.canMove({from: account}))
    }

    await expectThrow(this.instance.startMove({from: secondAccount}))
})

it('owner can mint new tokens', async () => {
    const totalSupply = await this.instance.totalSupply()
    const secondBalance = await this.instance.balanceOf(secondAccount)

    await this.instance.mint(secondAccount, 2, {from: account})

    const newTotalSupply = await this.instance.totalSupply()
    const newSecondBalance = await this.instance.balanceOf(secondAccount)
    newTotalSupply.toNumber().should.be.eq(totalSupply.toNumber() + 2)
    newSecondBalance.toNumber().should.be.eq(secondBalance.toNumber() + 2)
  })


  it('only the owner can mint new tokens', async () => {
    await expectThrow(this.instance.mint(secondAccount, 1, {from: secondAccount}))
  })
})