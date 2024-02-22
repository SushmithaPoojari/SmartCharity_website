console.log('PRIVATE_KEY:', process.env.PRIVATE_KEY);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://rpc.ankr.com/eth_sepolia',
        accounts: ['0xdda2c3ec1557befd383760d80103098098e33bb53f38bfe5c4713cc950a1060d']
        
        
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

