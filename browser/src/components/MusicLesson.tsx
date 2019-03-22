import React, { PureComponent } from "react"
import { InstrumentToken } from "../web3/InstrumentToken";

export class MusicLesson extends PureComponent<{ instrumentToken: InstrumentToken }, { studentAddress: string }> {

    constructor(props: { instrumentToken: InstrumentToken }) {
        super(props)
        this.state = { studentAddress: "" }
    }

    giveLesson() {
        try {
            this.props.instrumentToken.giveLesson(this.state.studentAddress)
        } catch(err) {
            console.error(err)
        }
    }

    handleStudentAddressChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ studentAddress: event.currentTarget.value })
    }

    render() {
        return (
            <div className="music-lesson">
                <button onClick={this.giveLesson.bind(this)}>Give Lesson</button>
                <input
                    type="text"
                    name="studentAddress"
                    value={this.state.studentAddress} 
                    onChange={this.handleStudentAddressChange.bind(this)}
                />
            </div>
        )
    }
}
