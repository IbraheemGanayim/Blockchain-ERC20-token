// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IbraToken is ERC20 {
    event TokensMinted(address indexed to, uint256 amount);

    constructor() ERC20("IbraToken", "IBT") {
        uint256 initialSupply = 1000000 * (10 ** uint256(decimals()));
        require(initialSupply > 0, "Initial supply must be greater than zero");
        _mint(msg.sender, initialSupply);
        emit TokensMinted(msg.sender, initialSupply);
    }
}