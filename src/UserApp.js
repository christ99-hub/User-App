import './style.css'; 
import './index.css'; 
import React, { useState } from 'react';
import { UserGrid } from './components/UserGrid';

export const UserApp = () => {
  const [title, setTitle] = useState('');
  const [name, setname] = useState('');
  
  const inputChange = (e) => {
    setTitle(e.target.value);
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    
    // Se requiere que el nombre tenga más de 3 caracteres
    if (title && title.trim().length > 3) {
      setname(title);
      console.log("Buscando usuario:", title);
      setTitle('');
    } else {
      console.error('El formulario no cumple con el formato necesario');
    }
  }
  
  return (
    <div className='max'>
      <div className='title'>
        <h1>App JsonPlaceholder</h1>
        <br />
      </div>
      <label className='label'>Busca el Usuario</label>
      <form className='form' onSubmit={submitForm}>
        <input 
          type='text'
          onChange={inputChange}
          value={title}
          placeholder='ej: Leanne, Ervin, etc...'
        />
        <button type='submit'>Buscar</button>
      </form>
      
      <UserGrid name={name} />
    </div>
  );
};
