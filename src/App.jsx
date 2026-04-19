import { useState } from 'react'
import './App.css'
import TitleCard from './components/TitleCard.jsx'
import ContactForm from './components/ContactForm.jsx'
import ContactList from './components/ContactList.jsx'

function App() {

  const [contactos, setContactos] = useState([
    { id: 1, nombre: "Ana García", telefono: "55 1234 5678", categoria: "Trabajo" },
    { id: 2, nombre: "Luis Martínez", telefono: "55 9876 5432", categoria: "Familia" },
    { id: 3, nombre: "María López", telefono: "55 5555 0101", categoria: "Amigo" }
  ])

  function agregarContacto(nombre, telefono, categoria) {
    const nuevoContacto = {
      id: Date.now(),
      nombre,
      telefono,
      categoria
    }
    setContactos([...contactos, nuevoContacto])
  }

  function borrarContacto(id) {
    setContactos(contactos.filter((contacto) => contacto.id !== id))
  }

  return (
    <div className='app'>
      <div className='phone-shape'>
        <TitleCard contactos={contactos} />
        <ContactForm onAgregar={agregarContacto} />
        <ContactList contactos={contactos} onDelete={borrarContacto} />
      </div>
    </div>
  )
}

export default App
