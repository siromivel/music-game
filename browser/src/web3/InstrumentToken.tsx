import { ethers, Signer, Contract } from "ethers"
import { BigNumber } from "ethers/utils"
import { Web3Provider } from "ethers/providers"

export class InstrumentToken {
    private instrumentTokenContract: Contract
    private signer: Signer

    constructor(contractAddress: string, abi: string, web3: Web3Provider) {
        this.signer = web3.getSigner()
        this.instrumentTokenContract = new ethers.Contract(contractAddress, abi, this.signer)
    }

    async getBalance() {
        const userAddress: string = await this.signer.getAddress()
        return this.instrumentTokenContract.balanceOf(userAddress)
            .then((balance: BigNumber) => balance.toNumber())
    }

    getName(): string {
        return this.instrumentTokenContract.name()
    }

    getSymbol(): string {
        return this.instrumentTokenContract.symbol()
    }

    getTokensOfUser(): number[] {
        return this.instrumentTokenContract.getTokensOfSender()
            .then((tokens: BigNumber[]) => tokens.map((token: BigNumber) => token.toNumber()))
    }

    giveLesson(address: string) {
        this.instrumentTokenContract.functions.musicLesson(address)
    }
}
