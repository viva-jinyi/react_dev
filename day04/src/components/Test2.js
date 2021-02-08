import React, { Component } from 'react';

class Test2 extends Component {
    // nameInput = null 
    nameInput = React.createRef()
    state = {
        username :'' , userpwd:'', addr:''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value 
        })    
    }
    handleReset = () => {
        this.setState({
            username:'' , userpwd:'' , addr:''
        })
        // this.nameInput.focus()
        this.nameInput.current.focus()
    }
    /*
        방법1) class 영역에  이름 = null 
                요소 이름연결   ref = { ref => {this.이름=ref}} 
                this.이름.focus() 
        방법2) class 영역에  이름 = React.createRef()
                요소 이름연결   ref = {this.이름}  
                this.이름.current.focus() 
    */

    render() {
        const { username , userpwd , addr } = this.state 
        return (
            <div>
                {/* <input type="text" ref={ref =>{this.nameInput = ref }} value={username} name="username"  onChange={this.handleChange} /> */}
                <input type="text" ref={ this.nameInput } value={username} name="username"  onChange={this.handleChange} />
                <input type="text" value={userpwd} name="userpwd" onChange={this.handleChange} />
                <input type="text" value={addr} name="addr" onChange={this.handleChange} />
                <button onClick={this.handleReset}>초기화</button>
                <p>
                    이름 : / {username}
                    비밀번호 : / {userpwd}
                    주소 : / { addr }
                </p>
            </div>
        );
    }
}

export default Test2;