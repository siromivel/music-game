pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract MusicSchool is ERC20, ERC20Detailed {
    constructor(string memory _name, string memory _symbol) ERC20Detailed(_name, _symbol, 1) ERC20() public {}

    function lesson(address _master, address _student) public returns (bool success) {
        require(balanceOf(_master) >= 1, "REQUIRES_MASTERY_TOKEN");
        _mint(_student, 1);
        return true;
    }
}
