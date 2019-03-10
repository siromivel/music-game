pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract MusicSchool is ERC20, ERC20Detailed, ERC20Mintable {
    constructor(string memory _name, string memory _symbol) ERC20Detailed(_name, _symbol, 1) ERC20Mintable() ERC20() public {}

    function lesson(address _master, address _student) public returns (bool success) {
        require(balanceOf(_master) >= 1, "Only a master may give lessons");
        _mint(_student, 1);
        return true;
    }
}
