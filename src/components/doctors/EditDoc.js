import React, { Component } from 'react'
import ReactDOM from  'react-dom'

export default class EditDoc extends Component {
    constructor(props){
        super(props);
        this.state = {counter : 0}
         //this.increment = this.increment.bind(this);
    }
      increment=(e) => {
          e.preventDefault();
          this.setState({
              counter : this.state.counter + 1
          })
      }
  render() {
    return  <button onClick={this.increment}>Value is {this.state.counter}</button>
  }
}

ReactDOM.render(
    <EditDoc/>,
    document.getElementById('root')
)