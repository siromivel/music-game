pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract InstrumentToken is ERC721Full {
    uint lastTokenId;

    constructor(string memory _name, string memory _symbol) ERC721Full(_name, _symbol) public {
        lastTokenId = 0;
        _mint(msg.sender, lastTokenId);
    }

    function musicLesson(address _student) public returns (bool) {
        require(balanceOf(msg.sender) > 0, "Only a master can give lessons");
        require(balanceOf(_student) == 0, "You cannot teach a master");
        lastTokenId += 1;
        _mint(_student, lastTokenId);

        lastTokenId += 1;
        _mint(msg.sender, lastTokenId);

        return true;
    }
}
