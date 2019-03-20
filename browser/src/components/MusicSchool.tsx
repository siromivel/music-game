import React, { Component } from "react"
import { Ethereum } from "../web3/Ethereum"
import { InstrumentList } from "./InstrumentList"
import { InstrumentToken } from "../web3/InstrumentToken"

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

    giveLesson() {
        try {
            this.instrumentToken.giveLesson(this.state.studentAddress)
        } catch(err) {
            console.error(err)
        }
    }

    handleStudentAddressChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ studentAddress: event.currentTarget.value })
    }

    render() {
        return (
            <div className="text-center margin-top-one">
                <button onClick={this.giveLesson.bind(this)}>Give Lesson</button>
                <input
                    type="text"
                    name="studentAddress"
                    value={this.state.studentAddress} 
                    onChange={this.handleStudentAddressChange.bind(this)}
                />

                <div>
                    {this.state.tokenName ? this.getFormattedBalanceText() : ""}
                </div>

                <InstrumentList instrumentToken={this.instrumentToken} />
            </div>
        )
    }
}
