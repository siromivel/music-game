pragma solidity ^0.5.0;

// Adapted from CryptoKitties GeneScience
contract PaintMixer {

    uint256 internal constant maskLast8Bits = uint256(0xff);
    uint256 internal constant maskFirst248Bits = uint256(~0xff);

    function mixPaint(
        uint256 _primary,
        uint256 _secondary,
        uint256 _targetBlock
    ) public view returns(uint24[] memory) {
        require(block.number > _targetBlock, "TARGET_TOO_LOW");

        uint256 rand = uint256(blockhash(_targetBlock));

        if (rand == 0) {
            _targetBlock = (block.number & maskFirst248Bits) + (_targetBlock & maskLast8Bits);
            if (_targetBlock >= block.number) _targetBlock -= 256;

            rand = uint256(blockhash(_targetBlock));
        }

        rand = uint256(keccak256(abi.encode(rand, _primary, _secondary, _targetBlock)));

        return decode(rand);
    }

    function decode(
        uint256 _colors
    ) public pure returns (uint24[] memory) {
        uint24[] memory colors = new uint24[](4);

        for (uint256 i = 0; i < 4; i++) {
            colors[i] = _get24Bits(_colors, i);
        }
    }

    function _get24Bits(
        uint256 _input, uint256 _slot
    ) internal pure returns(uint24) {
        uint256 offset = _slot * 24;
        uint256 mask = uint256(2**uint256(24) - 1) << offset;
        return uint24((_input & mask) >> offset);
    }
}
