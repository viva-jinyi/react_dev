import React, { Component } from 'react';

class Test3 extends Component {
    
    render() {
        const title ='제목 입니다.'
        const msg = '설명입니다.'
        const style1 = {fontSize:'20px', lineHeight:'30px', color:'green', backgroundColor:'pink'}
        return (
            <div>
                <h2 style={style1}> {title} </h2>
                <p style={{fontSize:100,color:'red', backgroundColor:'yellow'}}>
                    {msg}
                </p>
            </div>
        );
    }
}

export default Test3;