import React, { Component } from 'react';
import './Test1.css'

class Test1 extends Component {
    state = {
        done : false 
    }
    handleToggle = () => {
        const { done } = this.state 
        this.setState({
            // done : !this.state.done 
            done: !done 
        })
    }
    render() {
        const {done} = this.state 
        return (
            <div>
                {/* 
                {`${done && 'on'}`}                
                */}
                <p className={`${done ? 'on':''}`}  onClick={this.handleToggle}>
                    테스트 입니다.
                    addClass / removeClass 
                </p>
            </div>
        );
    }
}

export default Test1;