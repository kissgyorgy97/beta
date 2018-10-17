
Beta token contarct is ready "Betatoken.sol" 
- erc223 token - compatible with erc20 - tranfer(param1, param2) as a normal tranfer 
- transfer(param1, param2, param3) is a erc223 transfer

BetaWallet : "Beta_Wallet_for_HoneyGramm.sol"

this wallet would be create for every single user
the user would be the "owner" of the wallet-contract
when the wallet would be create( deployed) need to give the address of admin and the address of the token (in case the BetaToken)
admin: admin is also an ethereum address what have some special privilage

only admin can change the admin and give a new admin to the wallet-contarct
admin or owner can call TransferToToken() and create a pedding tranasaction waht is waiting for comfirmation

admin also can confirm any tx with Sign_TranferToToken()

admin can delete a pedding tx, if its neccessary
Beta.js: your API to access the contarct, API : you can read the comment of the beta.js file

functionality:
    - would be created to the user and would be a uniqe wallet, 
      owner of the wallet is the user 
    - user can host Beta Token in this wallet 
    - user can see the token balance of wallet 
    - user can withdraw Beta tokens from the wallet to own ethereum account 
    - wallet can host also ether and the user can withdraw it from the wallet 
    - user can see the ether balance of the wallet 
    - not neccessary to hold ether in this wallet -it is only an emergency function
    - Token sending woithout any condition: user can initiate a token transfer to the other user 
      and if the target user accept it the transaction would be done 
      or if they have any problem the Admin can sign instead of the target user or 
      can delete the transaction 
    - user also can delete the tx. 
    - user can initiate different type of token-transfer
        . just send token to the other user and waiting the acceptation
          ( in case the tx wait 2 signatures ,
         one from the sender user and otherone form the target user OR admin)   OK TODO: target user can sign  
        . TOKEN STAKING :send the token to the other user with conditions
          ( in case the tx wait 3 signatires,
         one from the sender, otherone from the target AND admin)
        . DATE STAKING : tx with 2 steps  
          (1 step: the user2 accept the invitation -> (1. step not need to made by the contract 
            because in this phase we have'nt token-moving, you can deal with in the backend,
            and if its ok =>
           2.step  admin  can call TransferToToken() as a DATE - waiting the comfirmation from both partner 
            and if everything is ok the result would be same as token-staking.)
        . type of tokeToTranfer : 0, if you need 2 comfirmations 
                      1, if you need 3 comfirmations


    - the user must have a private account from what he/she will sign the transactions
	 and this privat account must have some ether!
      This privat account would be exist or the server will generate when the user registrating. 
	Pls note the users : the server-generated accont not safety!
