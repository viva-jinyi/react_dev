import React, { Component } from 'react';

class Test8 extends Component {
    state = {
        username:'',
        useraddr:''
    }
    handleChange  = (e)  => {
        const {name , value} = e.target
        this.setState({
            [name]: value 
        })
    }
    /*
    handleChange  = (e)  => {
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    */
    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.handleChange}/>
                <input type="text" name="useraddr" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Test8;