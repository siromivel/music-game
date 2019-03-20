import React, { Component } from "react"
import { MusicSchool } from "./MusicSchool"
import "../styles/App.css"

export class App extends Component {
    randomCatGif(): string {
        let cats: string[] = ["bongo", "keyboard", "pixel", "whistle"]
        return `../assets/${cats[Math.floor(Math.random() * cats.length)]}cat.gif`
    }

    render() {
        return (
            <div className="main">
                <h1 className="text-center">Welcome to Music School</h1>
                <img className="block-center" src={this.randomCatGif()} />

                <MusicSchool className="text-center" />
            </div>
        )
    }
}
