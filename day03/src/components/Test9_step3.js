import React, { Component } from 'react';

class Test9 extends Component {
    state = {
        username:'' , userage :'' , useraddr :''
    }
    handleChange = ( e ) => {
        const { name , value} = e.target 
        this.setState({
            // [e.target.name]:e.target.value 
            [ name]: value 
        })
    }
    
    render() {
        return (
            <div>
                <p>
                    이름:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> /
                    나이:<input type="text" name="userage" value={this.state.userage} onChange={this.handleChange}/> / 
                    주소:<input type="text" name="useraddr" value={this.state.useraddr} onChange={this.handleChange}/> 
                    <button>초기화</button>
                </p>
                <p>이름: {this.state.username} </p>
                <p>나이: {this.state.userage }</p>
                <p>주소: {this.state.useraddr }</p>
            </div>
        );
    }
}

export default Test9;