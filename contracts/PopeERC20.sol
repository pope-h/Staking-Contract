// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PopeERC20 is ERC20, Ownable {
    constructor() ERC20("MyLowerToken", "MLT") Ownable(msg.sender) {
        _mint(msg.sender, 1000 * 10 ** uint(decimals()));
    }
}