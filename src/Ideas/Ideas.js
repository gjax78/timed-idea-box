import React from 'react'
import IdeaCard from '../IdeaCard/IdeaCard'
import './Ideas.css'

const Ideas = ({ ideas, deleteIdea }) => {
  const ideaCards = ideas.map(idea => {
    return (
       <div className='ideas-container' key={idea.id}>
        <IdeaCard
          title={idea.title}
          description={idea.description}
          id={idea.id}
          deleteIdea={deleteIdea}
        />
      </div>
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas
