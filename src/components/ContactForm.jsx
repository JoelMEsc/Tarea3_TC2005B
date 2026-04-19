import React from 'react'
import { useState } from 'react';
import './ContactForm.css'

function ContactForm({ onAgregar }) {

  const [contacto, setContacto] = useState({
    nombre: '',
    telefono: '',
    categoria: 'Categoria'
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (!contacto.nombre || !contacto.telefono || (contacto.categoria === 'Categoria')) return
    onAgregar(contacto.nombre, contacto.telefono, contacto.categoria)
    setContacto({
      nombre: '',
      telefono: '',
      categoria: ''
    })
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <input
        type="text"
        value={contacto.nombre}
        onChange={(e) => setContacto({...contacto, nombre: e.target.value})}
        placeholder='Nombre completo'
      />
      <input
        type="text"
        value={contacto.telefono}
        onChange={(e) => setContacto({...contacto, telefono: e.target.value})}
        placeholder='Télefono'
      />
      <select
        onChange={(e) => setContacto({...contacto, categoria: e.target.value})}
      >
        <option value='Categoria'>Categoría</option>
        <option value='Trabajo'>Trabajo</option>
        <option value='Familia'>Familia</option>
        <option value='Amigo'>Amigo</option>
      </select>
      <button type='submit'>+ Agregar contacto</button>
    </form>
  )
}

export default ContactForm