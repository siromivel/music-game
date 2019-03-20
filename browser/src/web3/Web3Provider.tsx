import { ethers } from "ethers"
import { MusicGame } from "./MusicGame";
const instrumentToken = require("../../../build/contracts/InstrumentToken.json")
const musicGameConfig = require("../../music-game-config.json")

export class Web3Provider {
    public musicGame: MusicGame

    constructor() {
        let signer = new ethers.providers.Web3Provider((window as any).web3.currentProvider).getSigner()
        this.musicGame = new MusicGame(musicGameConfig.local, instrumentToken.abi, signer)
    }
}
