import React, { Component } from 'react';

class Test7 extends Component {
    state = {
        name :'이름'
        // name :초기값
    }
    /*
        dog = {
            name :'치치와'
        }
        dog.name 
    */

    handleClick1 = ()  => {
        this.setState({
            name:'홍길동'
        })
    }
    handleClick2 = ()  => {
        this.setState({
            name :'강호동'
        })
    }
    handleClick3 = ()  => {}
    handleClick4 = ()  => {}

    render() {
        return (
            <div>
                <h2>{this.state.name }</h2>
                {/* this.dog.name  */}
                <p>
                    <button onClick={this.handleClick1}>홍길동</button>
                    <button onClick={this.handleClick2}>강호동</button>
                    <button onClick={this.handleClick3}>유재석</button>
                    <button onClick={this.handleClick4}>이효리</button>
                </p>
            </div>
        );
    }
}

export default Test7;