import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        const name ='홍길동'
        const age = 20
        const addr = '서울'
        const tel ='010-000-0000'
        const sex ='남자'
        return (
            <div>
                <h2>이름 : {name} </h2>
                <p> 나이 : {age} </p>
                <p> 주소 : {addr} </p>
                <p> 전화번호: {tel} </p>
                <p> 성별 : {sex} </p>
                <p
                    //태그에 설명달아주기 
                    /* 여러줄 주석처리하기 */ 
                >
                    jsx 구문
                </p>
                {/* 설명입니다. */}
                {/* JSX 문법 : javascript +XML  */}
            </div>
        );
    }
}

export default Test2;