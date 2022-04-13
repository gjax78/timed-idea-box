const fetchAPI = {
  getAllIdeas() {
    return fetch('http://localhost:3001/ideas')
    .then(response => {
      if (!response.ok) {
        throw new Error('Cannot load ideas!')
      } else {
        return response.json()
      }
    })
  },

  postNewIdeas(newIdea) {
    return fetch('http://localhost:3001/ideas', {
      method: 'POST',
      body: JSON.stringify(newIdea),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if(!response.ok) {
        return response.json()
      }
    })
  }
}

export default fetchAPI
