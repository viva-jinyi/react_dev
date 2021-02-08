import React, { Component } from 'react';
import Test11SubStub from './Test11SubStub';

class Test11Sub extends Component {
    render() {
        return (
            <div>
                <h2>Test2Sub</h2>
                <h3> com: {this.props.com} </h3>
                <h3> message: {this.props.message}  </h3>
                <p>
                    <button onClick={this.props.click1}>클릭1</button>
                    <button onClick={() => this.props.click3(100)}>클릭3</button>                   
                    <button onClick={() => this.props.click4(50,10)}>클릭4</button>                   
                </p>
                <hr/>
                <Test11SubStub 
                    com = {this.props.com}
                    message = { this.props.message }
                    click2 = {this.props.click2 }
                    click3 = { this.props.click3 }
                    click4 = { this.props.click4 }
                    color ='green'
                />
            </div>
        );
    }
}

export default Test11Sub;