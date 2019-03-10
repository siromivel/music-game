pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";

contract InstrumentToken is ERC721Full, ERC721Mintable {
    address private musicSchool;

    constructor(string memory _name, string memory _symbol, address _musicSchool) ERC721Full(_name, _symbol) public {
        musicSchool = _musicSchool;
    }

    function grantInstrument(address _instrumentRecipient) public returns(bool success) {
        require(msg.sender == musicSchool, "Only the music school can give you an instrument");
        _mint(_instrumentRecipient, 1);
        return true;
    }
}
