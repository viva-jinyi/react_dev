import React, { Component } from 'react';

class Test2 extends Component {
    textInput = React.createRef()

    state = {
        text :'' , pwd :''
    }
    handleChange = (e) => {
        const {name , value} = e.target 
        this.setState({
            [name]:value 
        })
    }
    handleClick = ()  => {
        this.setState({
            text:'', pwd:''
        })
        this.textInput.current.focus()
    }
    render() {
        const  { text , pwd} = this.state 
        return (
            <div>
                <input ref={this.textInput} type="text" name="text" onChange={this.handleChange} value={text} />
                <input type="password" name="pwd" onChange={this.handleChange} value={pwd} />
                
                {
                    pwd.length > 6 ?  
                    <button onClick={this.handleClick}>확인</button> :
                    <button disabled >확인</button>                                    
                }

                {
                     <button disabled={ pwd.length < 7 && true } onClick={this.handleClick}>확인</button>
                }


                <h2> {pwd.length} </h2>
            </div>
        );
    }
}

export default Test2;