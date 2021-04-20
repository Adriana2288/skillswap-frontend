import React, { Component } from 'react';
import axios from 'axios';

class CreateProfile extends Component {
    constructor () {
        super ()
        this.state = {
            name: "",
            age: "",
            description: ""
        }
    }
    
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  

const data = {
    name: this.state.name,
    age: this.state.age,
    description: this.state.description
  }

  axios
  .post("http://localhost:5001/api/profile", data)
  .then(res => {
      console.log(res)
      this.setState({
          name: "",
          age: "",
          description: ""
      })
      this.props.history.push("/")
  })
  .catch(error => {
      console.log(error)
  })
}

render () {
    return (
        <div className="container">
            <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    )
}
}

export default CreateProfile
