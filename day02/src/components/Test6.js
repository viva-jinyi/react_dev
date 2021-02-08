import React, { Component } from 'react';
import './Test6.css'

class Test6 extends Component {
    state = {
        done: false 
    }
    handleAddClass = () => {
        this.setState({
            done: true
        })
    }
    handleRemove  = ()  => {
        this.setState({
            done:false 
        })
    }
    handleToggle  = ()  => {
        this.setState({
            done : !this.state.done
        })
    }
    render() {
        const { done }  = this.state 
        return (
            <div className="Test6">
                <p>지금은 연습중 입니다.</p>
                <p className="test">지금은 연습중 입니다.</p>
                <p className={`test ${done === true ? 'on':''}`}>지금은 연습중 입니다.</p>
                <p className={`test ${done && 'on'}`}>지금은 연습중 입니다.</p>
                <p className={`${done && 'on'}`}>지금은 연습중 입니다.</p>

                <button onClick={this.handleAddClass}>클래스붙이기</button>
                <button onClick={this.handleRemove}>클래스떼기</button>
                <button onClick={this.handleToggle}>클래스토글</button>
            </div>
        );
    }
}

/*
class Test6 extends Component {
    state = {
        done: false 
    }
    handleAddClass = () => {
        this.setState({
            done: true
        })
    }
    handleRemove  = ()  => {
        this.setState({
            done:false 
        })
    }
    handleToggle  = ()  => {
        this.setState({
            done : !this.state.done
        })
    }
    render() {
        return (
            <div className="Test6">
                <p>지금은 연습중 입니다.</p>
                <p className="test">지금은 연습중 입니다.</p>
                <p className={`test ${this.state.done === true ? 'on':''}`}>지금은 연습중 입니다.</p>
                <p className={`test ${this.state.done && 'on'}`}>지금은 연습중 입니다.</p>
                <p className={`${this.state.done && 'on'}`}>지금은 연습중 입니다.</p>

                <button onClick={this.handleAddClass}>클래스붙이기</button>
                <button onClick={this.handleRemove}>클래스떼기</button>
                <button onClick={this.handleToggle}>클래스토글</button>
            </div>
        );
    }
}
*/
export default Test6;