import React from 'react'
import './TitleCard.css'

function TitleCard({contactos}) {
  return (
    <div className='title-card'>
        <h1>Mi agenda</h1>
        <p>{contactos.length} contactos guardados</p>
    </div>
  )
}

export default TitleCard