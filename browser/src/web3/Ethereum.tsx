import { ethers } from "ethers"
import { Web3Provider } from "ethers/providers"
import instrumentTokenJson from "../../../build/contracts/InstrumentToken.json"
import instrumentTokenConfig from "../../instrument-token-config.json"
import { InstrumentToken } from "./InstrumentToken"

export class Ethereum {
    public instrumentToken: InstrumentToken
    private web3: Web3Provider

    constructor() {
        this.web3 = new ethers.providers.Web3Provider((window as any).web3.currentProvider)

        this.instrumentToken = new InstrumentToken(instrumentTokenConfig.local, JSON.stringify(instrumentTokenJson.abi), this.web3)
    }

    public static getWeb3FromBrowser() {
        window.addEventListener("load", async () => {
            const w = (window as any) // Allow access to all properties of window

            if (w.ethereum) {
                w.web3 = new w.Web3(w.ethereum);
                try {
                    await w.ethereum.enable();
                } catch (err) {
                    console.error("Please connect a wallet to play")
                }
            }
            else if (w.web3) {
                w.web3 = new w.Web3(w.web3.currentProvider);
            }
            else {
                console.log("You must install an Ethereum wallet to play");
            }
        });
    }
}
