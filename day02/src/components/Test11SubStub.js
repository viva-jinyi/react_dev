import React, { Component } from 'react';

class Test11SubStub extends Component {
    render() {
        return (
            <div>
                <h3> com:{this.props.com} </h3>
                <h3> message:{this.props.message} </h3>
                <p>
                    <button onClick={this.props.click2}>클릭2</button>
                    <button onClick={() => this.props.click3(300)}>클릭3</button>
                    <button onClick={() => this.props.click4(100,200)}>클릭4</button>
                </p>
            </div>
        );
    }
}

export default Test11SubStub;