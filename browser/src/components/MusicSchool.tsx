import React, { Component } from "react"
import { Web3Provider } from "../web3/Web3Provider"
import { MusicGame } from "../web3/MusicGame"

interface SchoolState {
    studentAddress: string,
    tokenName: string,
    tokenSymbol: string,
    userBalance: string
}

export class MusicSchool extends Component<{ className: string }, SchoolState> {
    public musicGame: MusicGame
    private window: any

    constructor(props: { className: string, web3: any }) {
        super(props)

        this.musicGame = new Web3Provider().musicGame
        this.state = {
            userBalance: "",
            studentAddress: "",
            tokenName: "",
            tokenSymbol: ""
        }
    }

    async componentDidMount() {
        this.setState({
            tokenName: await this.musicGame.getName(),
            userBalance: await this.musicGame.getBalance()
        })
    }

    async giveLesson() {
        try {
            await this.musicGame.giveLesson(this.state.studentAddress)
        } catch(err) {
            console.error(err)
        }
    }

    async updateBalance() {
        this.setState({ userBalance: await this.musicGame.getBalance() })
    }

    getFormattedBalanceText() {
        return `You have ${this.state.userBalance + " " + this.state.tokenName + (this.state.userBalance == "1" ? "" : "s")}.`
    }

    handleStudentAddressChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ studentAddress: event.currentTarget.value })
    }

    render() {
        return (
            <div className="text-center">
                <button onClick={this.giveLesson.bind(this)}>Give Lesson</button>
                <input
                    type="text"
                    name="studentAddress"
                    value={this.state.studentAddress} 
                    onChange={this.handleStudentAddressChange.bind(this)}
                />

                <div>
                    { this.state.tokenName ? this.getFormattedBalanceText() : "" }
                </div>
            </div>
        )
    }
}
