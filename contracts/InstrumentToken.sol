pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract InstrumentToken is ERC721Full {
    address private musicSchool;

    constructor(address _musicSchool, string memory _name, string memory _symbol) ERC721Full(_name, _symbol) public {
        musicSchool = _musicSchool;
    }

    function grantInstrument(address _instrumentRecipient) public returns(bool success) {
        require(msg.sender == musicSchool, "MUST_BE_MUSIC_SCHOOL");
        _mint(_instrumentRecipient, 1);
        return true;
    }
}
