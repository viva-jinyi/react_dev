import React, { Component } from 'react';

class Test3 extends Component {
    state = {
        count : 0
    }
    increment = ()  => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = ()  => {
        this.setState( state => {
            return {
                count : state.count - 1
            }
        })
    }

    render() {
        const { count } = this.state 
        return (
            <div>
                <h2>카운트 :{ count } </h2>
                <p>
                    <button onClick={this.increment}>증가</button>
                    <button onClick={this.decrement}>감소</button>
                </p>
            </div>
        );
    }
}

export default Test3;