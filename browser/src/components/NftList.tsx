import React, { PureComponent } from "react"
import { InstrumentToken } from "../web3/InstrumentToken"

export class NftList extends PureComponent<{ instrumentToken: InstrumentToken }, { tokens: number[] }> {

    constructor(props: { instrumentToken: InstrumentToken }) {
        super(props)
        
        this.state = {
            tokens: []
        }
    }

    async componentDidMount() {
        this.setState({ tokens: await this.props.instrumentToken.getTokensOfUser() })
    }

    nftListItems(): JSX.Element[] {
        return(this.state.tokens.map((token, idx) => {
            return <li key={idx}>{token}</li>
        }))
    }

    render() {
        return(
            <ul className="token-list">
                {this.nftListItems()}
            </ul>
        )
    }
}
