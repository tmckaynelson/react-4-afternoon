import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    }
  }

  componentDidMount = () => {
    
    let { classname } = this.props.match.params
    axios.get(`http://localhost:3005/students?${classname}`)
    .then((response) => {
      this.setState({
        students: response.data
      })
    })
  }

  render() {

    let mappedStudents = this.state.students.map((student, index) => {
      return <Link to={`/student/${student.id}`} key={ index } ><h3>{ `${student.first_name} ${student.last_name}` }</h3></Link>
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { mappedStudents }
      </div> 
    )
  }
}