import React, { Component } from "react";
import {connect} from 'react-redux';
import {submit} from '../actions'

class TodoForm extends Component {
    state = {
        input:''
    }

    handleInput = event =>{
        this.setState({
            input: event.target.value
        })
        console.log(this.state.input)
    }

    submitInput = input => {
        this.props.submit(input)
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <h1>TODO FORM</h1>
                <input value={this.state.input} onChange={this.handleInput}/>
                <button type='button' onClick={() => this.submitInput(this.state.input)}>Submit</button>
            </div>
            
        )
    }
}

export default connect(null, {submit})(TodoForm)