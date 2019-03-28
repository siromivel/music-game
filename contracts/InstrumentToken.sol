pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

interface PaintMixer {
    function mixPaint(uint256 _primary, uint256 _secondary, uint256 _targetBlock) external view returns(uint24[] memory);
}

contract InstrumentToken is ERC721Full {
    uint lastTokenId = 0;

    constructor(string memory _name, string memory _symbol) ERC721Full(_name, _symbol) public {
        _mint(msg.sender, lastTokenId);
    }

    struct Instrument {
        uint24 primary;
        uint24 secondary;
        uint24 tertiary;
        uint24 quaternary;
    }

    function musicLesson(address _student) public returns (bool) {
        require(balanceOf(msg.sender) > 0, "REQUIRES_INSTRUMENT");
        require(balanceOf(_student) == 0, "STUDENT_ALREADY_TAUGHT");

        lastTokenId += 1;
        _mint(_student, lastTokenId);
        lastTokenId += 1;
        _mint(msg.sender, lastTokenId);

        return true;
    }

    function getTokensOfSender() external view returns(uint256[] memory) {
        if (balanceOf(msg.sender) == 0) return new uint256[](0);
        return _tokensOfOwner(msg.sender);
    }
}
