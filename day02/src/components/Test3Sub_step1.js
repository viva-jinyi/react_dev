import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Test3Sub extends Component {
    render() {
        return (
            <div style={{
                border:'1px solid',
                width:400,
                padding:20,
                borderColor: this.props.color,
                marginBottom:50
            }}>
                <ul>
                    <li>이름:{this.props.name} </li>
                    <li>나이:{this.props.age}</li>
                    <li>주소:{this.props.addr}</li>
                    <li>전화:{this.props.tel}</li>
                    <li>성별:{this.props.sex} </li>
                    <li>{this.props.done===true ? '참':'거짓'}</li>
                    <li>{this.props.done && '참참'}</li>
                    <li>{this.props.done || '거짓거짓'}</li>
                </ul>                
            </div>
        );
    }
}

export default Test3Sub;

Test3Sub.propTypes = {
    name : PropTypes.string.isRequired ,
    age : PropTypes.number ,
    addr : PropTypes.string ,
    sex : PropTypes.string, 
    tel : PropTypes.string ,
    done : PropTypes.bool
}

Test3Sub.defaultProps = {
    name :'아무나',
    age : 10,
    addr:'지역',
    tel:'000-0000-0000',
    done: false ,
    sex :'무'
}