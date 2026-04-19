import React from 'react'
import { useState } from 'react'
import './ContactList.css'
import ContactItem from './ContactItem.jsx'
import LabelFilter from './LabelFilter.jsx'

function ContactList({ contactos, onDelete }) {

  const [etiquetas, setEtiquetas] = useState(['Todos'])

  const contactosFiltrados = contactos.filter(contacto => etiquetas[0] === 'Todos' ? contacto : etiquetas.includes(contacto.categoria))

  return (
    <div className='contact-list'>
      <LabelFilter etiquetas={etiquetas} setEtiquetas={setEtiquetas}/>
      {
        contactosFiltrados.map((contacto) => (
          <ContactItem 
            key={contacto.id}
            nombre={contacto.nombre}
            telefono={contacto.telefono}
            categoria={contacto.categoria}
            onDelete={() => onDelete(contacto.id)}
          />
        ))
      }
    </div>
  )
}

export default ContactList