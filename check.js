// Import the web3 library
const Web3 = require('web3');

// Connect to the Ethereum network
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR-PROJECT-ID"));

async function checkBalance(address) {
  // Get the balance of the specified address
  const balance = await web3.eth.getBalance(address);
  
  // Convert the balance to Ether
  const balanceInEther = web3.utils.fromWei(balance, 'ether');
  
  console.log(`The balance of ${address} is ${balanceInEther} ETH`);
}

// Replace with the address you want to check
checkBalance('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
