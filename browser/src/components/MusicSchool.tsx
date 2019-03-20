import React, { Component } from "react"
import { Web3 } from "../web3/Web3"
import { MusicGame } from "../web3/MusicGame"

interface SchoolState {
    studentAddress: string,
    tokenName: string,
    tokenSymbol: string,
    userBalance: string
}

export class MusicSchool extends Component<{}, SchoolState> {
    public musicGame: MusicGame

    constructor(props: { web3: any }) {
        super(props)

        this.musicGame = new Web3().musicGame
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

    async updateBalance() {
        this.setState({ userBalance: await this.musicGame.getBalance() })
    }

    getFormattedBalanceText(): string {
        return `You have ${this.state.userBalance + " " + this.state.tokenName + (this.state.userBalance == "1" ? "" : "s")}.`
    }

    giveLesson() {
        try {
            this.musicGame.giveLesson(this.state.studentAddress)
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
                    { this.state.tokenName ? this.getFormattedBalanceText() : "" }
                </div>
            </div>
        )
    }
}
