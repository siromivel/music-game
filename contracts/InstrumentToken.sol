pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

interface PaintMixer {
    function mixPaint(uint256 _primary, uint256 _secondary, uint256 _targetBlock) external view returns(uint24[] memory);
}

contract InstrumentToken is ERC721Full {
    address owner;
    PaintMixer paintMixer;

    uint lastTokenId = 0;
    Instrument[] instruments;

    constructor(
        string memory _name,
        string memory _symbol,
        address _paintMixer
    ) ERC721Full(
        _name,
        _symbol
    ) public {
        owner = msg.sender;
        setPaintMixerAddress(_paintMixer);

        uint24[] memory colors = new uint24[](4);
        colors[0] = uint24(16770167);
        colors[1] = uint24(16754483);
        colors[2] = uint24(16774604);
        colors[3] = uint24(16761975);

        Instrument memory genesis = _createInstrument(colors);
        instruments.push(genesis);
        _mint(msg.sender, lastTokenId);
    }

    struct Instrument {
        uint24 primary;
        uint24 secondary;
        uint24 tertiary;
        uint24 quaternary;
        uint160 nextProductionBlock; // This will be fine until block # ~ 1.46x10^48, it'll be a while even if block times drop to 5s :)
    }

    modifier _onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function _createInstrument(
        uint24[] memory _colors
    ) internal view returns(
        Instrument memory
    ) {
        Instrument memory _instrument = Instrument({
            primary: _colors[0],
            secondary: _colors[1],
            tertiary: _colors[2],
            quaternary: _colors[3],
            nextProductionBlock: uint160(block.number + block.number % 13)
        });

        return _instrument;
    }

    function setPaintMixerAddress(
        address _new
    ) public _onlyOwner {
        paintMixer = PaintMixer(_new);
    }

    function getTokensOfAddress(
        address _address
    ) public view returns (
        uint256[] memory
    ) {
        return balanceOf(_address) == 0 ? new uint256[](0) : _tokensOfOwner(_address);
    }

    function getTokensOfSender()
    public view returns (
        uint256[] memory
    ) {
        return getTokensOfAddress(msg.sender);
    }

    function getInstrument(
        uint256 _id
    ) public view returns (
        uint24 primary,
        uint24 secondary,
        uint24 tertiary,
        uint24 quaternary,
        uint160 nextProductionBlock
    ) {
        Instrument memory instrument = instruments[_id];
        return (instrument.primary, instrument.secondary, instrument.tertiary, instrument.quaternary, instrument.nextProductionBlock);
    }

    function musicLesson(
        address _student
    ) public returns (
        bool
    ) {
        require(balanceOf(msg.sender) > 0, "REQUIRES_INSTRUMENT");
        require(balanceOf(_student)  == 0, "STUDENT_MUST_NOT_HAVE_INSTRUMENT");

        // Get parent token
        uint256[] memory teacherTokens = getTokensOfSender();
        uint256 parentToken = teacherTokens[teacherTokens.length - 1];
        Instrument memory parentInstrument = instruments[parentToken];

        // Create instrument for student
        lastTokenId += 1;
        uint256 parentPaint = parentInstrument.primary + parentInstrument.secondary + parentInstrument.tertiary + parentInstrument.quaternary;
        uint24[] memory studentColors = paintMixer.mixPaint(parentPaint, lastTokenId, parentInstrument.nextProductionBlock);
        Instrument memory studentInstrument = _createInstrument(studentColors);
        instruments.push(studentInstrument);
        _mint(_student, lastTokenId);

        // Create instrument for teacher
        lastTokenId += 1;
        uint256 studentPaint = studentInstrument.primary + studentInstrument.secondary + studentInstrument.tertiary + studentInstrument.quaternary;
        uint24[] memory teacherColors = paintMixer.mixPaint(studentPaint, lastTokenId, parentInstrument.nextProductionBlock);
        Instrument memory teacherInstrument = _createInstrument(teacherColors);
        instruments.push(teacherInstrument);
        _mint(msg.sender, lastTokenId);

        return true;
    }
}
