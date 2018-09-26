/**
 * IMPLEMENTATION in javascript 
 * You have to declare these variables globally for the funtions
* const address = 'address of the contract that we are using in string';
* const abi = require('abi of the contract that we are using in a json file');
* const Web3 = require('web3');
* const web3 = new Web3(); <--(here you can set the provider)
*/
const Web3 = require('web3');

/**
 * Calls a contract function to get the owner of the wallet.
 *
 * @method owner().call get the address of the owner
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} the address of the owner
 */

function getOwnerOfWallet(web3, address, abi, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
          
       
    try {
        BetaWalletContract.methods.owner().call((error, res) => {
            if (!error) {
                callback(res, 0);   
            }
            else {
                callback(null, error);
                }
            });
    } catch (err) {
        callback(0, err);
    }
}
/**
 * Calls a contract function to get the admin of the wallet.
 *
 * @method admin().call get the address of the admin
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} the address of the admin
 */
function getAdminrOfWallet(web3, address, abi, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
          
       
    try {
       BetaWalletContract.methods.admin().call((error, res) =>  {
            if (!error) {
                callback(res, 0);   
            }
            else {
                callback(null, error);
                }
            });
    } catch (err) {
        callback(0, err);
    }
}




/**
 * Calls a contract function to get the ID-s of the pending transactions.
 *
 * @method getPendingTransactions().call get the ID-s of the pending transactions
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {Array} the ID-s of the pending transactions
 */

function getPendingTransactions(web3, address, abi, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
        // initiate contract for an address
    
            try {
                BetaWalletContract.methods.getPendingTransactions().call((error, res) => {
                    if (!error) {
                        callback(res, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }

/**
 * Calls a contract function to get the balance of ethers in the wallet.
 *
 * @method walletBalance().call get the ether balance of the wallet
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {Number} the balance of ethers in the wallet
 */

function walletBalance(web3, address, abi, callback) {
    var res,balance
    const BetaWalletContract =  new web3.eth.Contract(abi, address);

            try {
                BetaWalletContract.methods.walletBalance().call((error, res) => {
                    if (!error) {
                        var balance = web3.utils.fromWei(res, 'ether');
                        callback(balance, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }

/**
 * Calls a contract function to get the balance of tokens in the wallet.
 *
 * @method walletBalance().call get the balance of tokens in the wallet
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {Number} the balance of tokens in the wallet
 */
function BalanceOfToken(web3, address, abi, callback) {
    var res,balance
    const BetaWalletContract =  new web3.eth.Contract(abi, address);

            try {
                BetaWalletContract.methods.walletBalanceOfToken().call((error, res) => {
                    if (!error) {
                        var balance = web3.utils.fromWei(res, 'ether');
                        callback(balance, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }
/**
 * Calls a contract function to get the admin of the wallet.
 *
 * @method check_permitting(who,transactionId).call check if the given address has got authorisation to sign the transaction given by the transactionId
 *      @param who the address that we are checking
 *      @param transactionId the Id of the transaction that we are checking
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {boolean} true if the address can sign the transaction
 */
        
function check_permitting(web3, address, abi, who, transactionId, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
          // initiate contract for an address
    
            try {
                 BetaWalletContract.methods.check_permitting(who, transactionId).call((error, res) => {
                     if (!error) {
                         callback(res, 0);   
                      }
                    else {
                          callback(null, error);
                          }
                     });
            } catch (err) {
                callback(0, err);
            }
          }
  
/**
 * Calls a contract function to send tokens from the caller to the beneficiary.
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {String} calleraddress  the address of the caller
 * @param {String} privateKey the private key of the calleraddress
 * @param {String} beneficiary the address of the person who the caller wants to send the tokens
 * @param {Number} amount the amount of the token that the caller want to send
 * @param {Number} type if 0 the transfertotoken need 2 signs,1 from the calleraddress the other from the admin or the beneficiary
 *                      if 1 the transfertotoken need 3 signs, 1 from the calleraddress one from the admin and one from the beneficiary
 * 
 * @method getTransactionCount(calleraddress) Get the numbers of transactions sent from this address.
 *      @param {String} calleraddress
 * @method transferToToken(beneficiary,amount,type).encodeABI Encodes the ABI for this method with the given params. This can be used to send a transaction.
 *      @param {String} beneficiary the address of the person who the caller wants to send the tokens
 *      @param {Number} amount the amount of the token that the caller want to send
 *      @param {Number} type if 0 the transfertotoken need 2 signs,1 from the calleraddress the other from the admin or the beneficiary
 *                      if 1 the transfertotoken need 3 signs, 1 from the calleraddress one from the admin and one from the beneficiary
 * @method transferToToken(beneficiary,amount,type).estimateGas Will call estimate the gas a method execution will take when executed in the EVM without.
 *      @param {String} beneficiary the address of the person who the caller wants to send the tokens
 *      @param {Number} amount the amount of the token that the caller want to send
 *      @param {Number} type if 0 the transfertotoken need 2 signs,1 from the calleraddress the other from the admin or the beneficiary
 *                      if 1 the transfertotoken need 3 signs, 1 from the calleraddress one from the admin and one from the beneficiary
 * @method signTransaction(tx,privateKey) Signs an Ethereum transaction with a given private key.
 *      @param tx variable declared above, containing the transaction's data
 *      @param {String} privateKey the private key of the calleraddress
 * 
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @method sendSignedTransaction(res.rawTransaction) Sends an already signed transaction
 *      @param res.rawTransaction the raw ethereum transaction
 * @method tran.on('transactionHash',(txhash)) give the transaction hash to txhash
 *      @param {String} transactionHash the hash of the transaction
 *      @param txhash variable declared to store transactionhash
 * @return {String} the transaction hash in string
 */     
 
function transferToToken(web3, calleraddress, privateKey, address, abi, beneficiary, amount, type,  callback) {
    var res
       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);

            try {
                web3.eth.getTransactionCount(calleraddress).then( (nonce) => {
                    let encodedABI = BetaWalletContract.methods.transferToToken(beneficiary, amount, type).encodeABI();
             BetaWalletContract.methods.transferToToken(beneficiary, amount, type).estimateGas({ 
                from: calleraddress }, (error, gasEstimate) => {
                  let tx = {
                    to: address,
                    gas: gasEstimate,
                    data: encodedABI,
                    nonce: nonce
                  };
                  web3.eth.accounts.signTransaction(tx, privateKey, (error, res) => {
                    if (res == null) {callback(error, null); 
                    } 
                    else {
                      let tran = web3.eth.sendSignedTransaction(res.rawTransaction);
                      tran.on('transactionHash', (txhash) =>
                       {
                        callback(0, txhash); 
                        });
                     }
                   })
                 })
              })

            } catch (err) {
                callback(err, 0);
            }
        }

/**
 * Calls a contract function to sign a token sending transaction.
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {String} sign_address the address of the signer
 * @param {String} sign_privateKey the private key of the signer
 * @param {Number} transactionId the Id of the transaction that we want to sign
 * 
 * @method getTransactionCount(sign_address)  Get the numbers of transactions sent from this address.
 *      @param {String} sign_address the address of the signer
 * @method sign_TransferToToken(transactionId).encodeABI  Encodes the ABI for this method with the given params. This can be used to send a transaction.
 *      @param {Number} transactionId the Id of the transaction that we want to sign
 * @method sign_TransferToToken(transactionId).estimateGas Will call estimate the gas a method execution will take when executed in the EVM without.
 *      @param {Number} transactionId the Id of the transaction that we want to sign
 * @method signTransaction(tx,sign_privateKey) Signs an Ethereum transaction with a given private key.
 *      @param tx variable declared above, containing the transaction's data
 *      @param {String} sign_privateKey the private key of the signer
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @method sendSignedTransaction(res.rawTransaction) Sends an already signed transaction
 *      @param res.rawTransaction the raw ethereum transaction
 * @method tran.on('transactionHash',(txhash)) give the transaction hash to txhash
 *      @param {String} transactionHash the hash of the transaction
 *      @param txhash variable declared to store transactionhash
 * @return {String} the transaction hash in string
 */     
        
function sign_TransferToToken(web3, sign_address, sign_privateKey, address, abi, transactionId, callback) {
    var res
                       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
           try {
                web3.eth.getTransactionCount(sign_address).then( (nonce) => {
                    let encodedABI = BetaWalletContract.methods.sign_TransferToToken(transactionId).encodeABI();
             BetaWalletContract.methods.sign_TransferToToken(transactionId).estimateGas({ 
                from: sign_address }, (error, gasEstimate) => {
                  let tx = {
                    to: address,
                    gas: gasEstimate + 100000,
                    data: encodedABI,
                    nonce: nonce
                  };
                  web3.eth.accounts.signTransaction(tx, sign_privateKey, (error, res) => {
                    if (res == null) {callback(error, null); 
                    } 
                    else {
                      let tran = web3.eth.sendSignedTransaction(res.rawTransaction);
                      tran.on('transactionHash', (txhash) =>
                       {
                        callback(0, txhash); 
                        });
                     }
                   })
                 })
              })

            } catch (err) {
                callback(err, 0);
            }
        }  

/**
 * Calls a contract function to delete a pending transaction.
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {String} sign_address the address of the signer
 * @param {String} sign_privateKey the private key of the signer
 * @param {Number} del_transactionId the Id of the transaction that we want to delete
 * 
 * @method getTransactionCount(sign_address)  Get the numbers of transactions sent from this address.
 *      @param {String} sign_address the address of the signer
 * @method deletePendingTransaction(del_transactionId).encodeABI  Encodes the ABI for this method with the given params. This can be used to send a transaction.
 *      @param {Number} del_transactionId the Id of the transaction that we want to delete
 * @method deletePendingTransaction(del_transactionId).estimateGas Will call estimate the gas a method execution will take when executed in the EVM without.
 *      @param {Number} del_transactionId the Id of the transaction that we want to delete
 * @method signTransaction(tx,sign_privateKey) Signs an Ethereum transaction with a given private key.
 *      @param tx variable declared above, containing the transaction's data
 *      @param {String} sign_privateKey the private key of the signer
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @method sendSignedTransaction(res.rawTransaction) Sends an already signed transaction
 *      @param res.rawTransaction the raw ethereum transaction
 * @method tran.on('transactionHash',(txhash)) give the transaction hash to txhash
 *      @param {String} transactionHash the hash of the transaction
 *      @param txhash variable declared to store transactionhash
 * @return {String} the transaction hash in string
 */     

function deletePendingTransaction(web3, sign_address, sign_privateKey, address, abi, del_transactionId, callback) {
    var res
                                       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
    try {
        web3.eth.getTransactionCount(sign_address).then( (nonce) => {
            let encodedABI = BetaWalletContract.methods.deletePendingTransaction(del_transactionId).encodeABI();
     BetaWalletContract.methods.deletePendingTransaction(del_transactionId).estimateGas({ 
        from: sign_address }, (error, gasEstimate) => {
          let tx = {
            to: address,
            gas: gasEstimate + 200000,
            data: encodedABI,
            nonce: nonce
          };
          web3.eth.accounts.signTransaction(tx, sign_privateKey, (error, res) => {
            if (res == null) {callback(error, null); 
            } 
            else {
              let tran = web3.eth.sendSignedTransaction(res.rawTransaction);
              tran.on('transactionHash', (txhash) =>
               {
                callback(0, txhash); 
                });
             }
           })
         })
      })

    } catch (err) {
        callback(err, 0);
    }
}  

/**
 * Calls a contract function to set a new admin.
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {String} admin_address the address of the admin
 * @param {String} admin_privateKey the private key of the admin
 * @param {String} newAdmin the address of the new admin that we want to set
 * 
 * @method getTransactionCount(admin_address)  Get the numbers of transactions sent from this address.
 *      @param {String} admin_address the address of the admin
 * @method setNewAdmin(newAdmin).encodeABI  Encodes the ABI for this method with the given params. This can be used to send a transaction.
 *      @param {String} newAdmin the address of the new admin that we want to set
 * @method setNewAdmin(newAdmin).estimateGas Will call estimate the gas a method execution will take when executed in the EVM without.
 *      @param {String} newAdmin the address of the new admin that we want to set
 * @method signTransaction(tx,admin_privateKey) Signs an Ethereum transaction with a given private key.
 *      @param tx variable declared above, containing the transaction's data
 *      @param {String} admin_privateKey the private key of the admin
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @method sendSignedTransaction(res.rawTransaction) Sends an already signed transaction
 *      @param res.rawTransaction the raw ethereum transaction
 * @method tran.on('transactionHash',(txhash)) give the transaction hash to txhash
 *      @param {String} transactionHash the hash of the transaction
 *      @param txhash variable declared to store transactionhash
 * @return {String} the transaction hash in string
 */          
function setNewAdmin(web3,admin_address, admin_privateKey, address, abi, newAdmin, callback) {
    var res
                                       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
    try {
        web3.eth.getTransactionCount(admin_address).then( (nonce) => {
            let encodedABI = BetaWalletContract.methods.setNewAdmin(newAdmin).encodeABI();
     BetaWalletContract.methods.setNewAdmin(newAdmin).estimateGas({ 
        from: admin_address }, (error, gasEstimate) => {
          let tx = {
            to: address,
            gas: gasEstimate + 200000,
            data: encodedABI,
            nonce: nonce
          };
          web3.eth.accounts.signTransaction(tx, admin_privateKey, (error, res) => {
            if (res == null) {callback(error, null); 
            } 
            else {
              let tran = web3.eth.sendSignedTransaction(res.rawTransaction);
              tran.on('transactionHash', (txhash) =>
               {
                callback(0, txhash); 
                });
             }
           })
         })
      })

    } catch (err) {
        callback(err, 0);
    }
}  

/**
 * Calls a contract function to withdraw ether from the contract.
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {String} calleraddress the address of the caller
 * @param {String} privateKey the private key of the caller
 * 
 * @method getTransactionCount(calleraddress)  Get the numbers of transactions sent from this address.
 *      @param {String} calleraddress the address of the caller
 * @method withdraw_ether().encodeABI  Encodes the ABI for this method. This can be used to send a transaction.
 * @method withdraw_ether().estimateGas Will call estimate the gas a method execution will take when executed in the EVM without.
 * @method signTransaction(tx,privateKey) Signs an Ethereum transaction with a given private key.
 *      @param tx variable declared above, containing the transaction's data
 *      @param {String} privateKey the private key of the caller
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @method sendSignedTransaction(res.rawTransaction) Sends an already signed transaction
 *      @param res.rawTransaction the raw ethereum transaction
 * @method tran.on('transactionHash',(txhash)) give the transaction hash to txhash
 *      @param {String} transactionHash the hash of the transaction
 *      @param txhash variable declared to store transactionhash
 * @return {String} the transaction hash in string
 */   
         
function withdraw_ether(web3, calleraddress, privateKey, address, abi, callback) {
    var res
                                               
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
    try {
        web3.eth.getTransactionCount(calleraddress).then( (nonce) => {
            let encodedABI = BetaWalletContract.methods.withdraw_ether().encodeABI();
     BetaWalletContract.methods.withdraw_ether().estimateGas({ 
        from: calleraddress }, (error, gasEstimate) => {
          let tx = {
            to: address,
            gas: gasEstimate + 200000,
            data: encodedABI,
            nonce: nonce
          };
          web3.eth.accounts.signTransaction(tx, privateKey, (error, res) => {
            if (res == null) {callback(error, null); 
            } 
            else {
              let tran = web3.eth.sendSignedTransaction(res.rawTransaction);
              tran.on('transactionHash', (txhash) =>
               {
                callback(0, txhash); 
                });
             }
           })
         })
      })

    } catch (err) {
        callback(err, 0);
    }
}  

/**
 * Calls a contract function to withdraw token from the contract.
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {String} calleraddress the address of the caller
 * @param {String} privateKey the private key of the caller
 * @param {Number} token_amount the amount of the token that the caller want to send
 * 
 * @method getTransactionCount(calleraddress)  Get the numbers of transactions sent from this address.
 *      @param {String} calleraddress the address of the caller
 * @method withdraw_token(token_amount).encodeABI  Encodes the ABI for this method. This can be used to send a transaction.
 *       @param {Number} token_amount the amount of the token that the caller want to send
 * @method withdraw_token(token_amount).estimateGas Will call estimate the gas a method execution will take when executed in the EVM without.
 *       @param {Number} token_amount the amount of the token that the caller want to send
 * @method signTransaction(tx,privateKey) Signs an Ethereum transaction with a given private key.
 *      @param tx variable declared above, containing the transaction's data
 *      @param {String} privateKey the private key of the caller
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @method sendSignedTransaction(res.rawTransaction) Sends an already signed transaction
 *      @param res.rawTransaction the raw ethereum transaction
 * @method tran.on('transactionHash',(txhash)) give the transaction hash to txhash
 *      @param {String} transactionHash the hash of the transaction
 *      @param txhash variable declared to store transactionhash
 * @return {String} the transaction hash in string
 */ 
    
         
function withdraw_token(web3,calleraddress, privateKey, address, abi, token_amount, callback) {
    var res
                                                           
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
    try {
        web3.eth.getTransactionCount(calleraddress).then( (nonce) => {
            let encodedABI = BetaWalletContract.methods.withdraw_token(token_amount).encodeABI();
     BetaWalletContract.methods.withdraw_token(token_amount).estimateGas({ 
        from: calleraddress }, (error, gasEstimate) => {
          let tx = {
            to: address,
            gas: gasEstimate + 200000,
            data: encodedABI,
            nonce: nonce
          };
          web3.eth.accounts.signTransaction(tx, privateKey, (error, res) => {
            if (res == null) {callback(error, null); 
            } 
            else {
              let tran = web3.eth.sendSignedTransaction(res.rawTransaction);
              tran.on('transactionHash', (txhash) =>
               {
                callback(0, txhash); 
                });
             }
           })
         })
      })

    } catch (err) {
        callback(err, 0);
    }
}  
      
                           
module.exports = {
    getOwnerOfWallet,
    getAdminrOfWallet,
    getPendingTransactions,
    walletBalance,
    BalanceOfToken,
    check_permitting,
    transferToToken,
    sign_TransferToToken,
    deletePendingTransaction,
    setNewAdmin,
    withdraw_ether,
    withdraw_token
  }