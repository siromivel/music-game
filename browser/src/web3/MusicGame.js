import { ethers, utils } from "ethers"

export class MusicGame {
    constructor(contractAddress, abi, signer) {
        this.musicGameContract = new ethers.Contract(contractAddress, abi, signer)
        this.userAddress = signer.getAddress().then(address => address)
    }

    getName() {
        return this.musicGameContract.name()
    }

    getBalance() {
        return this.musicGameContract.balanceOf(this.userAddress)
            .then(balance => utils.formatUnits(balance, 0))
            .then(balance => balance.replace(/\..*$/, ""))
    }

    giveLesson(address) {
        this.musicGameContract.functions.musicLesson(address)
            .then(this.getBalance)
            .then(this.setBalance)
    }
}
