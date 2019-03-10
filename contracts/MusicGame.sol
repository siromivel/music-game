pragma solidity ^0.5.0;

interface InstrumentToken {
    function grantInstrument(address _instrumentRecipient) external returns (bool success);
}

interface MusicSchool {
    function lesson(address _master, address _student) external returns (bool success);
}

contract MusicGame {
    MusicSchool private musicSchool;
    InstrumentToken private instrumentToken;

    constructor(address _musicSchool, address _instrumentToken) public {
        musicSchool = MusicSchool(_musicSchool);
        instrumentToken = InstrumentToken(_instrumentToken);
    }

    function teach(address _master, address _student) public returns(bool success) {
        require(musicSchool.lesson(_master, _student), "They just can't be taught");
        instrumentToken.grantInstrument(_master);
        instrumentToken.grantInstrument(_student);
        return success;
    }
}
