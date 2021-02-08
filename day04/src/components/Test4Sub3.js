import React, { Component } from 'react';
class Test4Sub3 extends Component {    
    render() {
        const { 
            values, nextStep, prevStep 
        } =this.props 
        const { 
            firstname , lastname , email , tel, occ, addr 
        } = values 

        return (
            <div className="Test4">
                <div>
                    <ul>
                        <li> <span>성</span> : { firstname } </li>
                        <li> <span>이름</span>: {lastname} </li>
                        <li> <span>이메일</span>: {email } </li>
                        <li> <span>직업</span>: {occ} </li>
                        <li> <span>연락처</span>: {tel} </li>
                        <li> <span>주소</span>: {addr} </li>
                    </ul>
                    <p>
                        <button onClick={prevStep}>이전</button>
                        <button onClick={nextStep}>다음</button>
                    </p>
                </div>
            </div>
        );
    }
}

/*
class Test4Sub3 extends Component {    
    render() {
        const { 
            values, nextStep, prevStep 
        } =this.props 

        return (
            <div className="Test4">
                <div>
                    <ul>
                        <li> <span>성</span> : { values.firstname } </li>
                        <li> <span>이름</span>: {values.lastname} </li>
                        <li> <span>이메일</span>: {values.email } </li>
                        <li> <span>직업</span>: {values.occ} </li>
                        <li> <span>연락처</span>: {values.tel} </li>
                        <li> <span>주소</span>: {values.addr} </li>
                    </ul>
                    <p>
                        <button onClick={prevStep}>이전</button>
                        <button onClick={nextStep}>다음</button>
                    </p>
                </div>
            </div>
        );
    }
}
*/
export default Test4Sub3;