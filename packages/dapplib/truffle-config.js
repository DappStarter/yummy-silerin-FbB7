require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strong regret ranch purity harvest immense army gas'; 
let testAccounts = [
"0xe1e86f016f36cceae7e91f2180268e41f1dc95dd5e6ab829a364de9c913b6c6f",
"0x9b06978b29dc2eaba2209e2f3dca4a0f7ee6f7ce998e2b8d7784702857ca6fde",
"0xd3cacb9f6fcb3c1bb5fbcaf6fe5fe5b869d674812d1a2d599e5eb3e824409a1c",
"0xacf46586530bc032966a75fffbeeb8bd6af61be679131dea1cff7589a17943a1",
"0xed52b82c0b56d1ea745829bb4a188a21c6bb5944be56cc15d5f372595dedaf6d",
"0xe69c36db6adeb14f5401c20d9636656627b1aba593958cf923b0dd99a88ea939",
"0x73e069de3f949b9c9893515b030532e0a46a03e6ccd50a165f9f635e34e4daed",
"0x1c6f9d2ed713b9a10dfa0e003248fe5a22284217aa0b52bc83391688b4c7d088",
"0x64cfb33d17eda3f5082daef0b7c6045e8ce55182809991a3ab44c6e39c9b4eea",
"0xd68ef4e625dd65c0cb373dc2700906d3ee20f50e156a930ab0a81eb27f87cf54"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


