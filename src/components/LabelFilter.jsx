import React, { act } from 'react'
import './LabelFilter.css'

function LabelFilter({ etiquetas, setEtiquetas}) {

  function toggleLabel(categoria) {
    let nuevas
    if (categoria === 'Todos') {
        nuevas = ['Todos']
    } else {
        const actuales = etiquetas.filter(etiqueta => etiqueta !== 'Todos')
        nuevas = actuales.includes(categoria) ? actuales.filter(etiqueta => etiqueta !== categoria) : [...actuales, categoria]
    }
    setEtiquetas(nuevas)
  }

  return (
    <div className='labels'>
      <button 
        onClick={() => toggleLabel('Todos')}
        className={etiquetas.includes('Todos') ? 'activo' : ''}
      >
        Todos
      </button>
      <button 
        onClick={() => toggleLabel('Trabajo')}
        className={etiquetas.includes('Trabajo') ? 'activo' : ''}
      >
        Trabajo
      </button>
      <button 
        onClick={() => toggleLabel('Familia')}
        className={etiquetas.includes('Familia') ? 'activo' : ''}
      >
        Familia
      </button>
      <button 
        onClick={() => toggleLabel('Amigo')}
        className={etiquetas.includes('Amigo') ? 'activo' : ''}
      >
        Amigo
      </button>
    </div>
  )
}

export default LabelFilter