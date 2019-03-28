pragma solidity ^0.5.0;

interface PaintMixer {
    function mixPaint() external view returns(uint24[] memory);
}

contract InstrumentCore {
    address owner;
    PaintMixer paintMixer;
    Instrument[] instruments;

    mapping(uint256 => address) public instrumentToOwner;

    constructor(address _paintMixer) public {
        owner = msg.sender;
        setPaintMixerAddress(_paintMixer);
    }

    struct Instrument {
        uint160 inscription;

        uint24 primary;
        uint24 secondary;
        uint24 tertiary;
        uint24 quaternary;
    }

    modifier _onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function setPaintMixerAddress(address _new) public _onlyOwner {
        paintMixer = PaintMixer(_new);
    }

    function _createInstrument(uint24[] memory _colors, uint160 _inscription) internal returns(uint) {
        Instrument memory _instrument = Instrument({
            primary: _colors[0],
            secondary: _colors[1],
            tertiary: _colors[2],
            quaternary: _colors[3],
            inscription: _inscription
        });

        uint256 newInstrumentId = instruments.push(_instrument) - 1;

        return newInstrumentId;
    }
}
