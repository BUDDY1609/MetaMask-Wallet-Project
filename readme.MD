# MetaMask Wallet Project

## Description

This project is Connect to Metamask Wallet, allowing users to interact with a smart contract.
Smart contract function provide to store added number on Ethereum network, after read network and show output like sum of number and multiple of number, other function store text message on Ethereum Network after read stored message on network and show output.

## Getting Started

Let's get start the project, follow the instructions below line by line.

### Prerequisites

- Node.js and npm should be installed on your machine.
- MetaMask extension should be installed in your web browser.

### Installation

1. Clone the repository: `git clone https://github.com/BUDDY1609/MetaMask-Wallet-Project`
2. Change to the project directory: `cd MetaMask-Wallet-Project`
3. Install the dependencies: `npm install`

### Executing Program

Follow the steps below to execute the program:

1. Open three separate terminals in VS Code.
2. In the first terminal, type and run: `npm i`
3. In the second terminal, type and run: `remixd`
4. In the third terminal, type and run: `npx hardhat node`
5. Open Remix IDE in your browser [https://remix.ethereum.org/](https://remix.ethereum.org/) and connect to `localhost`.
6. Connect MetaMask to the Hardhat server:
   - In the MetaMask extension, click on the network selection dropdown (top-left corner in metamask).
   - Click on Add network button.
   - Scroll and Click on Add a network manually.
   - after add value in network name. (anything name)
   - Enter `http://localhost:8545` as New RPC URL.
   - Enter `31337` as the Chain ID.
   - add Currency symbol (anything), And Save it.
   - Import an account or create a new one in MetaMask and switch to it.
7. Open the `contract.sol` file.
8. Change the environment to `hardhat network`.
9. Compile and deploy the smart contract.
10. Copy the contract address and paste it into the `FrontendMetamask.jsx` file as the value of the `contractAddress` variable.
11. Run the development server: `npm run dev`
12. Go to [http://localhost:5173/](http://localhost:5173/) in your web browser.
13. Click on the "Connect to MetaMask" button.
14. Enter a number in the input Number value and click on "Store Number". Wait For confirm transaction.
15. Click on "Sum Of Number" or "Multiple Of Number" to get the result.

## Authors

- Hiren Patel

## License

This project is licensed under the MIT License - see the LICENSE file for details
