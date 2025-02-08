// UserCard.jsx
import React from 'react';
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => {
  return (
    <div className="card h-100 shadow-lg border-0 rounded-3 hover-shadow">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fs-4 text-dark mb-3">{user.name}</h5>
        <div className="mb-3">
          <p className="card-text mb-1"><i className="bi bi-person-badge me-2"></i>{user.username}</p>
          <p className="card-text mb-1"><i className="bi bi-envelope me-2"></i>{user.email}</p>
          <p className="card-text mb-1"><i className="bi bi-phone me-2"></i>{user.phone}</p>
          <p className="card-text"><i className="bi bi-building me-2"></i>{user.companyName}</p>
        </div>
        <Link 
          className="btn btn-primary mt-auto align-self-start" 
          to={`/user/${user.id}`} 
          state={{ user }}
        >
          <i className="bi bi-arrow-right-circle me-2"></i>Ver Detalles
        </Link>
      </div>
    </div>
  );
};
