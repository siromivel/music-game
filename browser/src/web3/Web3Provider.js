import { ethers } from "ethers"

export default class Web3 {
    constructor(network) {
        if (process.env === "development") {
            this.provider = new ethers.providers.JsonRpcProvider(network)
        } else {
            this.provider = new ethers.providers.Web3Provider(network)
        }
    }
}
