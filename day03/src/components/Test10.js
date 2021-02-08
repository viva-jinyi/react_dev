import React, { Component } from 'react';

class Test10 extends Component {
    nameInput = React.createRef() 
    no = 1 
    state = {
        data :[] ,
        username:'' , userage :'' , useraddr :''
    }
    handleChange = ( e ) => {
        const { name , value} = e.target 
        this.setState({
            // [e.target.name]:e.target.value 
            [ name]: value 
        })
    }
    handleReset  = ()  => {       
        this.setState({ 
            data : this.state.data.concat({no:this.no++, username:this.state.username, userage : this.state.userage , useraddr:this.state.useraddr}),
            username:'' ,
            userage :'' ,
            useraddr:''
        })
        this.nameInput.current.focus()
    }

    handleRemove  = (num)  => {
        this.setState({
            data : this.state.data.filter( item => item.no !== num )
        })
    }

    render() {
        return (
            <div>
                <p>
                    이름:<input type="text" ref={this.nameInput} name="username" value={this.state.username} onChange={this.handleChange} /> /
                    나이:<input type="text" name="userage" value={this.state.userage} onChange={this.handleChange}/> / 
                    주소:<input type="text" name="useraddr" value={this.state.useraddr} onChange={this.handleChange}/> 
                    <button onClick={this.handleReset}>추가</button>
                </p>
                <hr/>
                <ul>
                    {/* 번호,이름 ,나이,주소 -누적  */}
                    {
                        this.state.data.map( item => <li key={item.no}>
                            번호:{item.no} /이름: {item.username} /
                            나이:{item.userage} / 주소:{item.useraddr}
                            <button onClick={() => this.handleRemove(item.no)}>삭제</button>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test10;