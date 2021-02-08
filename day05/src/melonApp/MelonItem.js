import React, { Component } from 'react';
import { AiOutlineVideoCamera , AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDash ,AiOutlineHeart} from "react-icons/ai";

class MelonItem extends Component {
    render() {
        const { item  } = this.props 
        const {
            rank , poster , title , singer , like , state 
        } = item 
        return (
            <>
                <tr>
                    <td>{rank}</td>
                    <td> <img src={poster} alt="" width="50" />
                        {title}
                    </td>
                    <td>{singer}  </td>
                    <td><i><AiOutlineHeart/></i> {like} </td>
                    <td> <i> <AiOutlineVideoCamera /> </i> </td>
                    <td>
          {state === '상승' &&  <i><AiOutlineArrowUp style={{color:'red'}} /></i>} 
          {state === '하강' &&  <i><AiOutlineArrowDown style={{color:'blue'}} /></i>} 
          {state === '유지' &&  <i><AiOutlineDash style={{color:'#999'}} /></i>} 
                        
                    </td>
                </tr>
            </>
        );
    }
}

export default MelonItem;