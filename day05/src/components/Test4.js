import React, { Component } from 'react';
import  $ from 'jquery'

class Test4 extends Component {
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
        ]
    }

    componentDidMount() {
        let msg = ''
        let $li = $('ul li')
        $('#text').keyup(function(){
            $li.hide()
            msg = $(this).val()
            let con = $li.find('span:contains('+msg+')')
            $(con).parent().show()
        })
    }
    
    render() {
        const {data} = this.state 
        return (
            <div>
                <input type="text" id="text" />
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

export default Test4;