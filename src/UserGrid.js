
import React from 'react';
import { UserCard } from './components/UserCard';
import { useFetch } from './hooks/useFetch';

export const UserGrid = () => {
  const { loading, data } = useFetch();
  
  return (
    
    <div className='background'>
    <div className="container-fluid min-vh-100 bg-light p-4 screen" >
    <h1 className="text-center mb-5 display-4 fw-bold text-primary titulo">Usuarios</h1>
      {loading && <div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status"></div></div>}
      
      <div className="row g-4">
        {data.map((user) => (
          <div className="col-12 col-sm-6 col-md-4 col-xl-3" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
