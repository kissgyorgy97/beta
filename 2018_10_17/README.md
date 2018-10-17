##Setup/Run Steps
#Note 1: These steps assume you have NodeJS, NPM, Truffle, Git, Ganache and MetaMask already set up. If you are missing any of those dependencies, please find their respective documentation online and set them up first.

#Note 2: these instructions use Ganache but you could use also truffle develop.( https://truffleframework.com/ganache )

1. Open a terminal session and navigate to the location you'd like to store a copy of the repo in.
2. Colne the repo into your folder.
3. Move into the root directory of the project.
4. Install dependencies via npm: npm install.
5. Compile the contracts with truffle to get the ABI of them : truffle compile.
6. Start Ganache.
7. Migrate the contracts to the local blockchain network: truffle migrate.
8. Copy the address from the log into beta.js address variable.
9. Give in beta.js the json file of the wallet contract into the abi variable.
10. ##!! Mind that here we are not using a public network so we won't need an infura gateway, but we have to set the provider for the local network.
11. Open a second terminal window and navigate to the root directory of the project.
12. ##!! Mind that when you are deploying to Ganache you are using the first generated account.
 
 Now you can call the funtions from beta.js to implement them.
#implementation you have to add the following to your javascript application beginning.

const {
    getOwnerOfWallet,
    getAdminrOfWallet,
    getPendingTransactions,
    walletBalance,
    BalanceOfToken,
    check_permitting,
    transferToToken,
    signTransaction,
    deletePendingTransaction,
    setNewAdmin,
    withdraw_ether,
    withdraw_token 
  } = require('./beta.js')

const json = require('./build/contracts/Beta_Wallet_for_HoneyGramm.json');
const address = 'the address of the deployed contract';
const abi = json['abi'];

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

After this you can call the exported methods with the parameters given in beta.js

##Running tests
Follow the instructions until the point 7
then run in cmd: truffle test

##deploying
You will find in 2_deploy_contracts.js a commented out line. If it is commented out you will only deploy the token contract, and if you change it to be not commented out you will deploy the token contract and the walletcontract with the address fo the token and the 1st account as admin.

