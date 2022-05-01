import React from 'react'
import './IdeaCard.css'

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
