import React, { Component } from 'react';
import './Test9.css'

class Test9 extends Component {
    state = {
        data :[
            {no:1, name:'유재석',age:20 , addr:'서울시 서초구',done:false},
            {no:2, name:'강호동',age:30 , addr:'서울시 강남구',done:true},
            {no:3, name:'김철수',age:10 , addr:'서울시 서초구',done:false},
            {no:4, name:'이효리',age:25 , addr:'서울시 서초구',done:true},
            {no:5, name:'엄정화',age:22 , addr:'서울시 서초구',done:true},
            {no:6, name:'제시',age:16 , addr:'서울시 서초구',done:false},
        ]
    }

    render() {
        return (
            <div className="Test9">
                <table>
                    <caption></caption>
                    <colgroup>
                        <col className="no" />
                        <col className="name" />
                        <col className="age" />
                        <col className="addr" />
                        <col className="done" />
                    </colgroup>
                    <thead>
                        <tr><th>번호</th> <th>이름</th> <th>나이</th>
                            <th>주소</th> <th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                           this.state.data.map( item => <tr key={item.no}>
                               <td>{item.no}</td>
                               <td>{item.name}</td>
                               <td>{item.age}</td>
                               <td>{item.addr}</td>
                               <td>{item.done === true ? '참여':'미참여'}</td>
                           </tr>)
                      }  


                        {/* <tr>
                           <td>{this.state.data[0].no} </td> 
                           <td>{this.state.data[0].name} </td>
                           <td>{this.state.data[0].age} </td>
                           <td>{this.state.data[0].addr} </td>
                           <td>{this.state.data[0].done === true ?'참여':'미참여'} </td>  
                        </tr> */}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test9;