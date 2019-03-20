import React, { Component } from "react"
import { InstrumentToken } from "../web3/InstrumentToken"

export class InstrumentList extends Component<{ instrumentToken: InstrumentToken }, { tokens: number[] }> {

    constructor(props: { instrumentToken: InstrumentToken }) {
        super(props)
        
        this.state = {
            tokens: []
        }
    }

    async componentDidMount() {
        this.setState({ tokens: await this.props.instrumentToken.getTokensOfUser() })
    }

    tokensListItems(): JSX.Element[] {
        return(this.state.tokens.map((token, idx) => {
            return <li key={idx}>{token}</li>
        }))
    }

    render() {
        return(
            <ul className="token-list">
                {this.tokensListItems()}
            </ul>
        )
    }
}
