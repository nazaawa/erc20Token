// SPDX-Licence-Indetifier: MIT


pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JonnyIsErc20 is ERC20 , Ownable {


    constructor() ERC20("JOHNNY TOKEN", "JAY") {
        _mint(msg.sender, 10000000);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint( to, amount);
    }
}