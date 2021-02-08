import React, { Component } from 'react';

class Test4Sub2 extends Component {    
    render() {
        const {
            nextStep , prevStep , handleChange 
        } = this.props 
        return (
            <div className="Test4">
                 <div>
                    <ul>
                        <li> 
                            <label htmlFor="occ">직업 </label> 
                            :<input type="text" name="occ" onChange={handleChange} id="occ" />
                        </li>
                        <li>
                            <label htmlFor="tel">연락처</label>
                            : <input type="text" name="tel" onChange={handleChange} id="tel" />
                        </li>
                        <li>
                            <label htmlFor="addr" >주소</label> :
                            <input type="text" name="addr" onChange={handleChange} id="addr" />
                        </li>
                    </ul>
                    <p>
                        <button onClick={prevStep}>이전</button>
                        <button onClick={nextStep}>결과</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test4Sub2;