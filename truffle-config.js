module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Ganache GUI port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 8000000          // Gas limit (increase if needed)
    }
  },
  compilers: {
    solc: {
      version: "0.8.21",      // Solidity compiler version
      settings: {
        optimizer: {
          enabled: false,    // Disable optimizer to avoid potential issues during deployment
          runs: 200          // Optimize runs (default: 200)
        }
      }
    }
  },
  // Optional settings for Truffle DB (disabled by default)
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};