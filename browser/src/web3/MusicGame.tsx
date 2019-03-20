import { ethers, utils, Signer, Contract } from "ethers"
import { BigNumber } from "ethers/utils"
import { Web3Provider } from "ethers/providers"

export class MusicGame {
    private musicGameContract: Contract
    private signer: Signer

    constructor(contractAddress: string, abi: string, web3: Web3Provider) {
        this.signer = web3.getSigner()
        this.musicGameContract = new ethers.Contract(contractAddress, abi, this.signer)
    }

    async getBalance() {
        const userAddress: string = await this.signer.getAddress()
        return this.musicGameContract.balanceOf(userAddress)
            .then((balance: BigNumber) => utils.formatUnits(balance, 0))
            .then((balance: string) => balance.replace(/\..*$/, ""))
    }

    getName(): string {
        return this.musicGameContract.name()
    }

    getSymbol(): string {
        return this.musicGameContract.symbol()
    }

    giveLesson(address: string) {
        this.musicGameContract.functions.musicLesson(address)
    }
}
