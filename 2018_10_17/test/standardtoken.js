const { expectThrow, expectEvent } = require('./helpers')
const BetaToken = artifacts.require('./BetaToken.sol')
const BigNumber = web3.BigNumber

contract('StandardToken', ([account, secondAccount, thirdAccount, forthAccount]) => {
  beforeEach(async () => {
    this.instance = await BetaToken.new({from: account})
    await this.instance.mint(account, 1000*18)
   
  })

  it('has total ammount', async () => {
    const totalSupply = await this.instance.totalSupply()
    totalSupply.toNumber().should.be.gt(0)
  })

  it('account has tokens', async () => {
    const balance = await this.instance.balanceOf(account)
    balance.toNumber().should.be.gt(0)
  })

  it('account has no tokens', async () => {
    const balance = await this.instance.balanceOf(secondAccount)
    balance.toNumber().should.be.eq(0)
  })

  it('account with balance can transfer tokens', async () => {
    await this.instance.startMove()
    const balance = await this.instance.balanceOf(account)
    const balanceSecond = await this.instance.balanceOf(secondAccount)

    const { logs } = await this.instance.transfer(secondAccount, 1,{from: account})
    expectEvent(logs, 'Transfer', {
      from: account,
      to: secondAccount,
      value: 1,
      data: "0x"
    })

    const newBalance = await this.instance.balanceOf(account)
    const newBalanceSecond = await this.instance.balanceOf(secondAccount)
    newBalance.toNumber().should.be.eq(balance.toNumber() - 1)
    newBalanceSecond.toNumber().should.be.eq(balanceSecond.toNumber() + 1)
  })

  it('account with zero balance cannot transfer tokens', async () => {
    await this.instance.startMove()
    await expectThrow(this.instance.transfer(account, 1, {from: thirdAccount}))
  })

  it('account can transfer tokens after approve', async () => {
    await this.instance.startMove()
    const balance = await this.instance.balanceOf(account)
    const balanceThird = await this.instance.balanceOf(thirdAccount)

    {
      const { logs } = await this.instance.approve(secondAccount, 1, {from: account})
      expectEvent(logs, 'Approval', {
        owner: account,
        spender: secondAccount,
        value: 1
      })
    }
    {
      const { logs } = await this.instance.transferFrom(account, thirdAccount, 1, {from: secondAccount})
      expectEvent(logs, 'Transfer', {
        from: account,
        to: thirdAccount,
        value: 1
      })
    }

    const newBalance = await this.instance.balanceOf(account)
    const newBalanceThird = await this.instance.balanceOf(thirdAccount)
    newBalance.toNumber().should.be.eq(balance.toNumber() - 1)
    newBalanceThird.toNumber().should.be.eq(balanceThird.toNumber() + 1)
  })

  it('account cannot transfer more tokens than approved', async () => {
    await this.instance.startMove()
    await this.instance.approve(secondAccount, 1, {from: account})
    await expectThrow(this.instance.transferFrom(account, thirdAccount, 2, {from: secondAccount}))
  })

  it('account cannot transfer tokens without approve', async () => {
    await this.instance.startMove()
    await expectThrow(this.instance.transferFrom(account, secondAccount, 1, {from: thirdAccount}))
  })
})
