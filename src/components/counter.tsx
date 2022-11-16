import React from "react";
import '../App.css';

interface _Props {}
interface _State {counter: number}

export class Counter extends React.Component<_Props, _State> {
    constructor(props: _Props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <button
                    className="circle"
                    onClick={() => this.setState({counter: this.state.counter + 1})}
                >
                    {this.state.counter}
                </button>
            </div>
        )
    }
}