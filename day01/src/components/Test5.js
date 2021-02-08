import React, { Component } from 'react';

class Test5 extends Component {
    render() {
        const myName = '나는 홍길동'
        return (
            <div>
                <Sub 
                    name = {myName}
                    //숫자 {숫자}
                    age = {20}
                    addr ='서울시 서초구'
                    tel = '010-0000-0000'
                    sex ='남자'
                    // true,false {}
                    done = {true }
                    color ='red'
                />
            </div>
        );
    }
}

class Sub extends Component {
    render() {
        //비구조할당 
        const {
            color , age , name , addr , done , sex , tel 
        }  = this.props 
        return (
            <div>
                <h4 style={{color:color}}>이름 : {name}</h4>
                <h4>나이 : {age } </h4>
                <h4>주소 : {addr }</h4>
                {/* <h4 style={{color:color}}>전화 : {tel }</h4> */}
                <h4>성별 : {sex} </h4>
                <p>
                    {
                        done === true ? <button>로그인</button> : <button>로그아웃</button>
                    }
                </p>
            </div>
        );
    }
}


/*

class Sub extends Component {
    render() {
        return (
            <div>
                <h4 style={{color:this.props.color}}>이름 : {this.props.name}</h4>
                <h4>나이 : {this.props.age } </h4>
                <h4>주소 : {this.props.addr }</h4>
                <h4 style={{color:this.props.color}}>전화 : {this.props.tel }</h4>
                <h4>성별 : {this.props.sex} </h4>
                <p>
                    {
                        this.props.done === true ? <button>로그인</button> : <button>로그아웃</button>
                    }
                </p>
            </div>
        );
    }
}



*/

export default Test5;