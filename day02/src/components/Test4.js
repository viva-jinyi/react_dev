import React, { Component } from 'react';

class Test4 extends Component {
    handleClick1 = () => {
        alert('test1')
    }
    handleClick2 = () => {
        alert('test2')
    }
    handleClick3 = () => {
        alert('test3')
    }

    handleClick4 = (num) => {
        alert(num)
    }
    handleClick5 = (num1, num2) => {
        alert(num1 + num2)
    }

    render() {
        return (
            <div>
                <h2>이벤트와 함수처리</h2>
                <p>
                    <button onClick={this.handleClick1}>이벤트1</button>
                    <button onClick={this.handleClick2}>이벤트1</button>
                    <button onClick={this.handleClick3}>이벤트1</button>
                </p>
                <p>
                    <button onClick={()=>{
                        alert('test')
                        // 실행줄이 여러개 일때 {}
                    }}>이벤트</button>
                    {/* 콜백형식 */}
                    <button onClick={()=>alert('test')}>이벤트</button>
                    <button onClick={()=>alert('test')}>이벤트</button>
                    <button onClick={()=>alert('test')}>이벤트</button>
                </p>
                <p>
                    {/* 값 전달 -> 함수로 감싼다  */}
                    <button onClick={()=>this.handleClick4(10)} >값 전달</button>
                    <button onClick={()=>this.handleClick5(10,20)} >값 전달 </button>
                </p>
            </div>
        );
    }
}

export default Test4;