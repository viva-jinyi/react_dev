import React, { Component } from 'react';
import Test3Sub from './Test3Sub';

class Test3 extends Component {
    render() {
        return (
            <div>
                <h2>자식컴포넌트, props, 타입, 디폴트</h2>
                <Test3Sub 
                    name='홍길동'
                    age = {20}
                    addr ='서울'
                    tel='000-111-2222'
                    sex ='남자'
                    color='red'
                    done={true}
                />
                <Test3Sub 
                    name ='유재석'
                    age = {30}
                    sex ='남자'
                    color ='blue'
                />
                <Test3Sub />
            </div>
        );
    }
}

export default Test3;