import React, { Component } from "react"
import { Ethereum } from "../web3/Ethereum"
import { InstrumentList } from "./InstrumentList"
import { InstrumentToken } from "../web3/InstrumentToken"
import { MusicLesson } from "./MusicLesson"

interface SchoolState {
    studentAddress: string,
    tokenName: string,
    tokenSymbol: string,
    userBalance: string
}

export class MusicSchool extends Component<{}, SchoolState> {
    public instrumentToken: InstrumentToken

    constructor(props: {}) {
        super(props)
        Ethereum.getWeb3FromBrowser()

        this.instrumentToken = new Ethereum().instrumentToken
        this.state = {
            userBalance: "",
            studentAddress: "",
            tokenName: "",
            tokenSymbol: ""
        }
    }

    async componentDidMount() {
        this.setState({
            tokenName: await this.instrumentToken.getName(),
            userBalance: await this.instrumentToken.getBalance()
        })
    }

    async updateBalance() {
        this.setState({ userBalance: await this.instrumentToken.getBalance() })
    }

    getFormattedBalanceText(): string {
        return `You have ${this.state.userBalance + " " + this.state.tokenName + (this.state.userBalance == "1" ? "" : "s")}.`
    }

    render() {
        return (
            <div className="text-center margin-top-one">
                <div>
                    {this.state.tokenName ? this.getFormattedBalanceText() : ""}
                </div>

                <MusicLesson instrumentToken={this.instrumentToken} />
                <InstrumentList instrumentToken={this.instrumentToken} />
            </div>
        )
    }
}
