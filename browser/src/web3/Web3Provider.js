import { ethers } from "ethers"

export class Web3 {
    constructor(network) {
        this.provider = new ethers.providers.JsonRpcProvider(network)
    }
}
