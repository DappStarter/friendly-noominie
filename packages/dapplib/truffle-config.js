require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember social hunt hero fortune stadium'; 
let testAccounts = [
"0x395c7057152258913141ea458ed51141e82e06c5d612e7c5835b724fddb5378b",
"0x841cc23be4ba8d30135e7d8ed864344f06dff86ad201bc33b448ee44aefe1a55",
"0x9ee94ff9e943024ffa3d1b9f8e749d33e3c8d28644f52502991ada4d74741148",
"0x3215c66150ae8b18787e1bd58226a14a0e56627ab1a4a7e80b0ed7835d969e2e",
"0xd36d3cea938ddb431396412f77e5de5d09cd464e259fa56e575b65623198885d",
"0x4562c49969dbce8577d53bff56cb6422906229ad5746f0c9c72ace777fccaa91",
"0x6936c41621113181e49c18e8b9f9d68df24500b41a2c955e30e3a1094da69e2c",
"0x2e690afd0cd5e7821d7d9dfa0ad639ab2d065472a4fc6cd411a76206f7d920dd",
"0x240462587cfdd99968b1e4220925be3fb29afe450e92cd28ce03233335a3c530",
"0x53969a01032094936f0c47e5bcc1d111dfe804101316a7904923529d8f88f97f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
