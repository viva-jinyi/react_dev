import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        const title ='신상명세서'
        const name ='홍길동'
        const age = 20
        const addr = '서울'
        const done = true 
        const color = 'green'
        const style1 ={
            color:'pink', fontSize:16, backgroundColor:'yellow'
        }
        return (
            <div>
                <h2>변수: {} - JSX </h2>
                <h3
                    style={{color:color,fontSize:20}}
                > {title} </h3>
                <ul>
                    <li style={style1}> 이름 : {name}  </li>
                    <li> 나이 : {age} </li>
                    <li> 주소 : {addr} </li>
                    <li> { done === true ? '확인':'취소'} </li>
                    <li>
                        { done && '확인1' }
                    </li>
                    <li>
                        {done || '취소'}
                    </li>
                </ul>

                {/* 주석 , 설명 */}
                <p
                    //한줄설명 
                    /*
                        여러줄 설명 
                    */
                >
                    설명추가
                </p>

            </div>
        );
    }
}

export default Test1;