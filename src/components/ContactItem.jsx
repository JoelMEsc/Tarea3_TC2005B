import React from 'react'
import './ContactItem.css'

function ContactItem({ nombre, telefono, categoria, onDelete }) {

  const labelColor = {
    Trabajo: '#e6f1fb',
    Familia: '#e1f5ee',
    Amigo: '#eeeef9'
  }

  const avatarColor = ['#eeeef9', '#e1f5ee', '#faece7', '#faeeda']
  function getAvatarColor(nombre) {
    const index = nombre.charCodeAt(0) % avatarColor.length
    return avatarColor[index]
  }

  function obtenerIniciales(nombre) {
    return nombre
      .split(' ')
      .slice(0, 2)
      .map(palabra => palabra[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className='contact'>
      <div className='left'>
        <div className='avatar' style={{ backgroundColor: getAvatarColor(nombre) }}>{obtenerIniciales(nombre)}</div>
        <div>
          <p id='name'>{nombre}</p>
          <p id='number'>{telefono}</p>
        </div>
      </div>
      <div className='right'>
        <div className='type' style={{ backgroundColor: labelColor[categoria]}}>{categoria}</div>
        <button onClick={onDelete}>╳</button>
      </div>
    </div>
  )
}

export default ContactItem