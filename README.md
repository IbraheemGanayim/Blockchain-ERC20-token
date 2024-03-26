# Blockchain ERC20 Token Project

Welcome to our Blockchain ERC20 Token Project! This project is developed as part of our blockchain course at [Your University/Institution].

## Overview

This project aims to demonstrate the development and deployment of an ERC20 token on the Ethereum blockchain using the Truffle framework. The ERC20 token standard is widely adopted and allows for the creation of fungible tokens, which can represent any tradable asset.

## Features

- **ERC20 Token Implementation**: Implementation of the ERC20 token standard with customizable features.
- **Deployment to Development Network**: Deployment of the token contract to the local development network using Ganache.
- **Testing**: Unit testing of smart contracts using Truffle's testing framework.
- **Deployment Script**: Custom deployment script (`2_deploy_ibra_token.js`) to automate the deployment process.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**: `git clone https://github.com/yourusername/Blockchain-ERC20-token.git`
2. **Install dependencies**: `npm install`
3. **Start a local Ethereum network**: Use Ganache or Ganache CLI.
4. **Compile the smart contracts**: `truffle compile`
5. **Migrate the contracts**: `truffle migrate --reset`
6. **Interact with the contract**: Use Truffle console or write scripts.

## Project Structure

The project structure is organized as follows:

```
Blockchain-ERC20-token/
│
├── contracts/             # Solidity smart contracts
│   └── IbraToken.sol     # ERC20 token contract
│
├── migrations/            # Truffle migration scripts
│   └── 2_deploy_ibra_token.js
│
├── test/                  # Test files for smart contracts
│   └── ibraToken.test.js
│
├── truffle-config.js      # Truffle configuration file
├── .gitignore             # Git ignore file
└── README.md              # Project README file
```

## Contributing

Contributions to the project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request.
