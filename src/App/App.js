// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Form from '../Form/Form'
import Ideas from '../Ideas/Ideas'
import fetchAPI from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  fetchAllIdeas = () => {
    fetchAPI.getAllIdeas()
    .then(data => {
      this.setState({ ideas: data })
    })
  }

  componentDidMount() {
    this.fetchAllIdeas()
  }

  addIdea = (newIdea) => {
    fetchAPI.postNewIdeas(newIdea)
    .then(() => this.fetchAllIdeas())
  }

  deleteIdea = (id) => {
    console.log(id)
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id)

    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return(
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    )
  }
}

export default App;
