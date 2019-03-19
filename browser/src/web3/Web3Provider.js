import { ethers } from "ethers"
import { MusicGame } from "./MusicGame";
const musicSchool = require("../../../build/contracts/InstrumentToken.json")

export class Web3 {
    constructor() {
        this.provider = new ethers.providers.Web3Provider(web3.currentProvider)
        this.musicGame = new MusicGame("0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B", musicSchool.abi, this.provider.getSigner())
    }
}
