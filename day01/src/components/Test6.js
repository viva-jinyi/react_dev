import React, { Component } from 'react';

class Test6 extends Component {
    handleClick1 = () => {
        alert('test1')
    }
    handleClick2 = () => {
        alert('두번째 함수')
    }
    handleClick3 = () => {
        alert('세번째 함수')
    }

    handleClick4 = ( num ) => {
        alert('값' + num )
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>클릭1</button>
                <button onClick={this.handleClick2}>클릭2</button>
                <button onClick={this.handleClick3}>클릭3</button>
                {/* 즉시호출 막아주기 위해서 함수로 감싼다 */}
                <button onClick={() => this.handleClick4(100)}>클릭4</button>
            </div>
        );
    }
}

export default Test6;