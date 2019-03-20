import React, { PureComponent } from "react"
import { Ethereum } from "../web3/Ethereum"
import { NftList } from "./NftList"
import { InstrumentToken } from "../web3/InstrumentToken"
import { MusicLesson } from "./MusicLesson"
import { SymbolToGifMap } from "../constants/SymbolToGifMap"
import { TokenBalance } from "./TokenBalance"

type SchoolState = {
    tokenName: string,
    tokenSymbol: string,
    balance: number | ""
}

export class MusicSchool extends PureComponent<{}, SchoolState> {
    public instrumentToken: InstrumentToken

    constructor(props: {}) {
        super(props)
        Ethereum.getWeb3FromBrowser()

        this.instrumentToken = new Ethereum().instrumentToken
        this.state = {
            balance: "",
            tokenName: "",
            tokenSymbol: ""
        }
    }

    async componentDidMount() {
        this.setState({
            balance: await this.instrumentToken.getBalance(),
            tokenName: await this.instrumentToken.getName(),
            tokenSymbol: await this.instrumentToken.getSymbol()
        })
    }

    getCatGifType(symbol: string): string {
        return this.state.balance ? SymbolToGifMap[symbol as keyof typeof SymbolToGifMap] : "pixel"
    }

    render() {
        return (
            <div className="text-center margin-top-one">
                {this.state.tokenSymbol ?
                    <img
                        className={`${this.getCatGifType(this.state.tokenSymbol)}-cat-gif block-center`}
                        src={`../assets/${this.getCatGifType(this.state.tokenSymbol)}cat.gif`}
                    />
                : ""}
                <h1 className="text-center">Welcome to {this.state.tokenName} School</h1>

                <TokenBalance balance={this.state.balance} symbol={this.state.tokenSymbol} />
                <MusicLesson instrumentToken={this.instrumentToken} />
                <NftList instrumentToken={this.instrumentToken} />
            </div>
        )
    }
}
