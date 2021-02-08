import React, { Component } from 'react';

class Test4Sub1 extends Component {
    render() {
        const { handleChange , nextStep } = this.props 
        return (
            <div className="Test4">
                <div>
                    <ul>
                        <li> 
                            <label htmlFor="firstname">성 </label> 
                            :<input type="text" id="firstname" name="firstname" onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="lastname">이름</label>
                            : 
                            <input type="text" id="lastname" name="lastname" onChange={handleChange} />
                        </li>
                        <li>
                            <label htmlFor="email">이메일</label> :
                            <input type="text" id="email" name="email"
                            onChange={handleChange} />
                        </li>
                    </ul>
                    <p>
                        <button onClick={nextStep}>다음</button>
                    </p>
                </div>
            </div>
        );
    }
}

export default Test4Sub1;