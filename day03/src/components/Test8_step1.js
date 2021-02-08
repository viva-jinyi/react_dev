import React, { Component } from 'react';

class Test8 extends Component {
    state = {
        username:'',
        useraddr:''
    }
    handleChange1  = (e)  => {
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    handleChange2  = (e)  => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    /*
    handleChange1  = (e)  => {
        this.setState({
            ['username']:e.target.value 
        })
    }
    handleChange2  = (e)  => {
        this.setState({
            ['useraddr'] : e.target.value 
        })
    }
    */
    /*
    handleChange1  = (e)  => {
        this.setState({
            username:e.target.value 
        })
    }
    handleChange2  = (e)  => {
        this.setState({
            useraddr : e.target.value 
        })
    }
*/
    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.handleChange1}/>
                <input type="text" name="useradd" onChange={this.handleChange2}/>
            </div>
        );
    }
}

export default Test8;