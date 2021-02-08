import React, { Component } from 'react';
import './Base.css'
import './Test4.css'
import Test4Sub1 from './Test4Sub1';
import Test4Sub2 from './Test4Sub2';
import Test4Sub3 from './Test4Sub3';
import Test4Sub4 from './Test4Sub4';

class Test4 extends Component {
    state = {
        step:1,
        firstname:'' , lastname:'', email :'' ,
        occ :'' , tel :'' , addr :''
    }    

    handleChange = (e) => {
        const {name , value} = e.target 
        this.setState({
            [name] : value 
        })
    }

    nextStep = () => {
        this.setState({
            step : this.state.step + 1
        })
    }
    prevStep = () => {
        this.setState( state => {
            return {
                step : state.step - 1
            }
        })
    }


    render() {
        const { step , firstname, lastname, email, occ, addr, tel  } = this.state 

        const values = { step , firstname, lastname, email, occ, addr, tel  }

        switch( step ) {
            case 1:
                return <Test4Sub1  
                handleChange = { this.handleChange }
                nextStep = { this.nextStep }
                />
            case 2:
                return <Test4Sub2  
                handleChange = { this.handleChange }
                nextStep  = { this.nextStep } 
                prevStep = {this.prevStep} />
            case 3:
                return <Test4Sub3 values ={ values } 
                nextStep ={ this.nextStep } prevStep={this.prevStep} />
            case 4:
                return <Test4Sub4 />
            default:
                console.log('그외')                
        }
    }
}

export default Test4;