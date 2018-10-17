const { expectThrow, expectEvent } = require('./helpers')
const BetaToken = artifacts.require('./BetaToken.sol')
const BigNumber = web3.BigNumber

contract('BurnableToken', ([account, secondAccount, thirdAccount, forthAccount]) => {
  beforeEach(async () => {
    this.instance = await BetaToken.new({from: account})
    await this.instance.startMove()
    await this.instance.mint(account, 1000*18)
  })

  it('account can burn tokens', async () => {
    const balance = await this.instance.balanceOf(account)

    const { logs } = await this.instance.burn(1,{from: account})
    expectEvent(logs, 'Transfer', {
      from: account,
      to: '0x0000000000000000000000000000000000000000',
      value: 1
    })
    expectEvent(logs, 'Burn', {
        burner: account,
        value: 1
    })

    const newBalance = await this.instance.balanceOf(account)
    newBalance.toNumber().should.be.eq(balance.toNumber() - 1)
  })

  it('account can burn tokens after approval', async () => {
    const balance = await this.instance.balanceOf(account)

    {
      const { logs } = await this.instance.approve(secondAccount, 1, {from: account})
      expectEvent(logs, 'Approval', {
        owner: account,
        spender: secondAccount,
        value: 1
      })
    }
    {
    const { logs } = await this.instance.burnFrom(account, 1,{from: secondAccount})
    expectEvent(logs, 'Transfer', {
      from: account,
      to: '0x0000000000000000000000000000000000000000',
      value: 1
    })
    expectEvent(logs, 'Burn', {
        burner: account,
        value: 1
    })
}
    const newBalance = await this.instance.balanceOf(account)
    newBalance.toNumber().should.be.eq(balance.toNumber() - 1)
  })


})