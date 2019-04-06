import { Signer, Contract } from "ethers"
import { Web3Provider } from "ethers/providers"
import { BigNumber } from "ethers/utils"
import { Instrument, InstrumentData } from "../components/Instrument"

export class InstrumentToken {
  private instrumentTokenContract: Contract
  private signer: Signer

  constructor(contractAddress: string, abi: string, web3: Web3Provider) {
    this.signer = web3.getSigner()
    this.instrumentTokenContract = new Contract(
      contractAddress,
      abi,
      this.signer,
    )
  }

  async getBalance(): Promise<number> {
    const userAddress: string = await this.signer.getAddress()

    return this.instrumentTokenContract
      .balanceOf(userAddress)
      .then((balance: BigNumber) => balance.toNumber())
  }

  getName(): Promise<string> {
    return this.instrumentTokenContract.name()
  }

  getSymbol(): Promise<string> {
    return this.instrumentTokenContract.symbol()
  }

  getTokensOfUser(): Promise<number[]> {
    return this.instrumentTokenContract
      .getTokensOfSender()
      .then((tokens: BigNumber[]) =>
        tokens.map((token: BigNumber) => token.toNumber()),
      )
  }

  getInstrument(id: number): Promise<Instrument> {
    return this.instrumentTokenContract
      .getInstrument(id)
      .then(
        (instrumentData: InstrumentData) => new Instrument(...instrumentData),
      )
      .catch(() => console.error("Error finding instrument: " + id))
  }

  giveLesson(address: string): void {
    this.instrumentTokenContract.functions.musicLesson(address)
  }
}
