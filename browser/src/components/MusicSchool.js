"use strict"
import React, { Component } from "react"
import { Web3 } from "../web3/Web3Provider"

export default class MusicGame extends Component {
    constructor() {
        super()
        this.musicGame = new Web3().musicGame
        this.state = {
            userBalance: "",
            studentAddress: "",
            tokenName: ""
        }
    }

    async componentDidMount() {
        this.setState({
            tokenName: await this.musicGame.getName(),
            userBalance: await this.musicGame.getBalance()
        })

        this.tokenDataLoaded = true
    }

    getFormattedBalanceText() {
        return `You have ${this.state.userBalance} ${this.state.tokenName + (this.state.userBalance == 1 ? "" : "s")}.`
    }

    async giveLesson() {
        await this.musicGame.giveLesson(this.state.studentAddress)
    }

    handleStudentAddressChange(event) {
        this.setState({ studentAddress: event.target.value })
    }

    async updateBalance() {
        this.setState({ userBalance: await this.musicGame.getBalance() })
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
