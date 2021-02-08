import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        name:'길동',
        age : 20 ,
        addr : '서울' ,
        done : true 
    }
    handleClick1 = () => {
        this.setState({
            name :'유재석',
            age : 30 ,
            addr : '제주' ,
            done: false 
        })
    }
    handleClick2 = () => {
        this.setState({
            name :'강호동' , age :10 , addr:'전주',done:true 
        })
    }
    handleClick3 = () => {
        this.setState({
            name:'이효리',age:25, addr:'경기',done:true
        })
    }

    handleReset  = ()  => {
        this.setState({
            name :'' , age :0 , addr:'', done:false 
        })
    }

    render() {
        return (
            <div>
                <h2>state , 비구조할당</h2>
                <p>이름 :{this.state.name} </p>
                <p>나이 :{this.state.age }</p>
                <p>주소 : {this.state.addr }</p>
                <p>
                    결과: {this.state.done === true ? '확인':'취소'}
                </p>
                <p>
                    <button onClick={this.handleClick1}>바꾸기</button>
                    <button onClick={this.handleClick2}>바꾸기</button>
                    <button onClick={this.handleClick3}>바꾸기</button>
                </p>
                <p>
                    <button onClick={ () => {
                        this.setState({
                            name:'김철수',
                            age : 22 ,
                            addr :'서울',
                            done : false 
                        })
                    }                        
                    }>값 바꾸기</button>
                    <button  onClick={() => 
                                  this.setState({name:'제시',age:15})}>
                        값 바꾸기 
                    </button>
                    <button onClick={this.handleReset}>
                        초기화
                    </button>
                </p>
            </div>
        );
    }
}

export default Test5;