import { ethers, utils, Signer, Contract } from "ethers"
import { BigNumber } from "ethers/utils";

export class MusicGame {
    private musicGameContract: Contract
    private signer: Signer

    constructor(contractAddress: string, abi: string, signer: Signer) {
        this.signer = signer        
        this.musicGameContract = new ethers.Contract(contractAddress, abi, this.signer)
    }

    getName() {
        return this.musicGameContract.name()
    }

    getSymbol() {
        return this.musicGameContract.name()
    }

    async getBalance() {
        const userAddress: string = await this.signer.getAddress()

        return this.musicGameContract.balanceOf(userAddress)
            .then((balance: BigNumber) => utils.formatUnits(balance, 0))
            .then((balance: string) => balance.replace(/\..*$/, ""))
    }

    giveLesson(address: string) {
        this.musicGameContract.functions.musicLesson(address)
    }
}
