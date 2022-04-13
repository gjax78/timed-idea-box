import React, { Component } from 'react'
// import Ideas from '../Ideas/Ideas'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitIdea = event => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' });
  }

  render() {
    return (
      <form>
        <select
          placeholder='title'
          name='title'
          onChange={event => this.handleChange(event)}>
          <option value=' '>Pick an idea</option>
          <option value='Dishes'>Dishes</option>
          <option value='Laundry'>Laundry</option>
          <option value='Sweep'>Sweep</option>
          <option value='Vacuum'>Vacuum</option>
       </select>

        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form
