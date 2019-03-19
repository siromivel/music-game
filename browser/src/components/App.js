"use strict"

import React, { Component } from "react"
import "../styles/App.css"

class App extends Component {
    randomCatGif() {
        let cats = ["bongo", "keyboard", "pixel", "whistle"]
        return `../assets/${cats[Math.floor(Math.random() * cats.length)]}cat.gif`
    }

    render() {
        return (
            <div className="main">
                <h1 className="text-center">Welcome to Music School</h1>
                <img className="cat-header" src={this.randomCatGif()} />

                <MusicGame />
            </div>
        )
    }
}

export default App
