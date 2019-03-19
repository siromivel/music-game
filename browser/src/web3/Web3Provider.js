import { ethers } from "ethers"
import { MusicGame } from "./MusicGame";
const instrumentToken = require("../../../build/contracts/InstrumentToken.json")
const musicGameConfig = require("../../music-game-config.json")

export class Web3 {
    constructor() {
        this.provider = new ethers.providers.Web3Provider(web3.currentProvider)
        this.musicGame = new MusicGame(musicGameConfig.local, instrumentToken.abi, this.provider.getSigner())
    }
}
