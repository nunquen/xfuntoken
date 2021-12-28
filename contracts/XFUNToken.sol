// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

import "./Messenger.sol";

contract XFUNToken is Initializable, Messenger {
    IERC20Upgradeable public token;

    function initialize(IERC20Upgradeable _token) public initializer {
        token = _token;
    }
}