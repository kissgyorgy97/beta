
const { expectThrow, expectEvent } = require('./helpers')
const BetaToken = artifacts.require('./BetaToken.sol')
const BigNumber = web3.BigNumber

contract('MintableToken', ([account, secondAccount, thirdAccount, forthAccount]) => {
  beforeEach(async () => {
    this.instance = await BetaToken.new({from: account})
  })

  it('only the owner can mint tokens', async () => {
    const balance = await this.instance.balanceOf(secondAccount)
    await expectThrow(this.instance.mint(thirdAccount, 1000, {from: secondAccount}))
    const { logs } = await this.instance.mint(secondAccount, 1000,{from: account})
    
    expectEvent(logs, 'Mint', {
        to: secondAccount,
        amount: 1000
      })
    expectEvent(logs, 'Transfer', {
      from: '0x0000000000000000000000000000000000000000',
      to: secondAccount,
      value: 1000
      
    })
   

    const newBalance = await this.instance.balanceOf(secondAccount)
    newBalance.toNumber().should.be.eq(balance.toNumber() + 1000)
  })

  it('only the owner can finish minting', async () => {
    await expectThrow(this.instance.mint(thirdAccount, 1000, {from: secondAccount}))
    const { logs } = await this.instance.finishMinting({from: account})
    
    expectEvent(logs, 'MintFinished', {})
  })

 

})