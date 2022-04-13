import React from 'react'

const IdeaCard = ({ title, description, id, deleteIdea}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑</button>
    </div>
  )
}

export default IdeaCard
