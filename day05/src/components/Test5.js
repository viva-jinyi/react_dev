import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        data : [
            {no:1, name:'홍길동'},
            {no:2, name:'aaa'},
            {no:3, name:'abc'},
            {no:4, name:'Dog'},
            {no:5, name:'Cat'},
            {no:6, name:'강호동'},
            {no:7, name:'김수근'},
            {no:8, name:'이효리'},
            {no:9, name:'엄정화'},
            {no:10, name:'제시'},            
        ],
        text :''
    }
    handleChange = (e) => {
        this.setState({
            text : e.target.value 
        })
    }
    
    render() {
        const {data, text} = this.state 
        // const filterData = data.filter(item => item.name.indexOf(text) !== -1 )
        const filterData = data.filter (item => {
            const re = new RegExp(text ,'ig')
            return item.name.match(re)
        })
        return (
            <div>
                <input type="text" onChange = { this.handleChange } />
                <hr/>
                <h2>검색결과</h2>
                {
                    filterData.map( item => <p key={item.no}>
                        {item.no } / {item.name }
                    </p>)
                }

                <hr/>
                <ul>
                {
                    data.map( item => <li key={item.no}>
                        {item.no} / <span>{item.name} </span>
                    </li> )
                }
                </ul>
            </div>
        );
    }
}

export default Test5;