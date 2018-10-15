##Setup/Run Steps
#Note 1: These steps assume you have NodeJS, NPM, Truffle, Git, Ganache and MetaMask already set up. If you are missing any of those dependencies, please find their respective documentation online and set them up first.

#Note 2: these instructions use Ganache but you could use also truffle develop.

1. Open a terminal session and navigate to the location you'd like to store a copy of the repo in.
2. Colne the repo into your folder.
3. Move into the root directory of the project.
4. Compile the contracts with truffle to get the ABI of them : truffle compile.
5. Start Ganache.
6. Migrate the contracts to the local blockchain network: truffle migrate.
7. Copy the address from the log into beta.js address variable.
8. Give in beta.js the json file of the wallet contract into the abi variable.
9. ##!! Mind that here we are not using a public network so we won't need an infura gateway, but we have to set the provider for the local network.
10. Open a second terminal window and navigate to the root directory of the project.
11. Install dependencies via npm: npm install.
12. ##!! Mind that when you are deploying to Ganache you are using the first generated account.
 
 Now you can call the funtions from beta.js to implement them.

Running test
Start Ganache.
Migrate contracts to Ganache: truffle migrate.
Run the Tests: truffle test.
