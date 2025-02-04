
import React, { useState, useEffect } from 'react';
import { useUsers } from '../hooks/useUsers';
import { UserCard } from './UserCard';

export const UserGrid = ({ name }) => {
  const users = useUsers(name);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (name.trim() !== '') {
      setSearched(true);
    }
  }, [name]);

  return (
    <div>
      {users.loading && <p className='charging'>Cargando...</p>}
      
      {!users.loading && searched && users.data.length === 0 && (
        <p className='notfound'>No se encontró ningún usuario con ese nombre.</p>
      )}
      
      <div className='content'>
        {users.data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div> 
    </div>
  );
};

