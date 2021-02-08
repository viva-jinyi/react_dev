import React, { Component } from 'react';
import Test1Sub from './Test1Sub';

class Test1 extends Component {
    state = {
        data :[
            {no:1, name:'홍길동',age:20,done:true},
            {no:2, name:'김철수',age:32,done:false},
            {no:3, name:'유재석',age:22,done:true},
            {no:4, name:'이효리',age:30,done:false},
            {no:5, name:'제시',age:40,done:true},
            {no:6, name:'엄정화',age:23,done:true},
        ]
    }

    handleAdd1 = () => {
        this.setState({
            data : this.state.data.concat({no:7,name: '화사',age:26, done:true })
        })
    }
    handleAdd2 = () => {
        this.setState({
            data: this.state.data.concat({no:8,name:'김길동',age:22, done:false })
        })
    }

    handleRemove = (num) =>{
        this.setState({
            data : this.state.data.filter( item => item.no !== num )
        })
    }

    handleModify1 = ( num ) => {
        this.setState({
            data: this.state.data.map(item => {
                if(item.no === num  ){
                    return {
                        ...item ,
                        name:'이순길',
                        age : 70 ,
                        done:false 
                    }
                }else {
                    return item 
                }
            })
        })
    }
    handleModify2 = (num) => {
        const {data} = this.state 
        this.setState({
            data : data.map (item => item.no === num ? {...item, name:'이수근',age:40, done:true }: item )
        })
    }

    render() {
        return (
            <div>
                <ul>
                  {
                      this.state.data.map( item => <li key={item.no}>
                          {item.no} / {item.name} / {item.age} / 
                          {item.done === true ? '이상':'이하'}
                      </li>)
                  }
                </ul>
                <p>
                    <button onClick={this.handleAdd1}>추가1</button>
                    <button onClick={this.handleAdd2}>추가2</button>
                    <hr/>

                    <Test1Sub 
                        onRemove = { this.handleRemove }
                        onModify1 = { this.handleModify1 }
                        onModify2 = { this.handleModify2 }
                    />
                </p>
            </div>
        );
    }
}

export default Test1;