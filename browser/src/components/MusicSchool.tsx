import React, { PureComponent } from "react"
import { CatGif } from "./CatGif"
import { Ethereum } from "../web3/Ethereum"
import { NftList } from "./NftList"
import { InstrumentToken } from "../web3/InstrumentToken"
import { MusicLesson } from "./MusicLesson"
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

    render() {
        return (
            <div className="text-center margin-top-one">
                {this.state.tokenSymbol ? <CatGif balance={this.state.balance} symbol={this.state.tokenSymbol}/> : ""}
                <h1 className="text-center">Welcome to {this.state.tokenName} School</h1>

                <TokenBalance balance={this.state.balance} symbol={this.state.tokenSymbol} />
                <MusicLesson instrumentToken={this.instrumentToken} />
                <NftList instrumentToken={this.instrumentToken} />
            </div>
        )
    }
}
