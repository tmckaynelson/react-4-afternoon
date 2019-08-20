import React, { Component } from 'react';
import axios from 'axios'

export default class Student extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount = () => {

    let { id } = this.props.match.params

    axios.get(`http://localhost:3005/students/${id}`)
    .then((response) => {
      console.log(response)
      this.setState({
        studentInfo: response.data
      })
    })
  }

  render() {
    console.log(this.state)
    let { first_name, last_name, grade, email } = this.state.studentInfo
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{ `${first_name} ${last_name}` }</h1>
        <h3>Grade: { grade }</h3>
        <h3>Email: { email }</h3>
      </div>
    )
  }
}