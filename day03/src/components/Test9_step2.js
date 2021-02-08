import React, { Component } from 'react';

class Test9 extends Component {
    state = {
        username:'' , userage :'' , useraddr :''
    }
    handleChange1 = ( e ) => {
        this.setState({
            ['username']:e.target.value 
        })
    }
    handleChange2 = ( e ) => {
        this.setState({
            ['userage']:e.target.value 
        })
    }
    handleChange3 = ( e ) => {
        this.setState({
            ['useraddr']:e.target.value 
        })
    }
    render() {
        return (
            <div>
                <p>
                    이름:<input type="text" onChange={this.handleChange1} /> /
                    나이:<input type="text" onChange={this.handleChange2}/> / 
                    주소:<input type="text" onChange={this.handleChange3}/> 
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