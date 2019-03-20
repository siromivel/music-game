import { ethers } from "ethers"
import { Web3Provider } from "ethers/providers"
import instrumentToken from "../../../build/contracts/InstrumentToken.json"
import musicGameConfig from "../../music-game-config.json"
import { MusicGame } from "./MusicGame"

export class Web3 {
    public musicGame: MusicGame
    private web3: Web3Provider

    constructor() {
        this.web3 = new ethers.providers.Web3Provider((window as any).web3.currentProvider)

        this.musicGame = new MusicGame(musicGameConfig.local, JSON.stringify(instrumentToken.abi), this.web3)
    }
}
