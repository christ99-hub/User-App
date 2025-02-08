
// CardInfo.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Componente Carrusel para las publicaciones
const PostsCarousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentPost = posts[currentIndex];

  return (
    <div className="card shadow-lg border-0 rounded-3">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">
          Publicación {currentIndex + 1} de {posts.length}: {currentPost.posttitle}
        </h4>
      </div>
      <div className="card-body">
        <p className="text-dark">{currentPost.postbody}</p>
        <h5 className="text-dark">Comentarios</h5>
        {currentPost.comments && currentPost.comments.length > 0 ? (
          currentPost.comments.map((comment, index) => (
            <div key={index} className="border rounded p-2 my-2">
              <p className="mb-1 text-dark">
                <strong>{comment.name}</strong> (<em>{comment.email}</em>)
              </p>
              <p className="mb-0 text-dark">{comment.body}</p>
            </div>
          ))
        ) : (
          <p className="text-muted">No hay comentarios para este post.</p>
        )}
      </div>
      <div className="card-footer bg-light d-flex justify-content-between">
        <button className="btn btn-outline-primary" onClick={handlePrev}>
          <i className="bi bi-chevron-left"></i> Anterior
        </button>
        <button className="btn btn-outline-primary" onClick={handleNext}>
          Siguiente <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export const CardInfo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.user) {
    return (
      <div className="container my-4">
        <div className="alert alert-warning text-center">
          No se encontró información del usuario.
        </div>
      </div>
    );
  }

  const { user } = state;

  const handleReturn = () => {
    navigate("/users", { replace: true });
  };

  return (
    <div className="container-fluid min-vh-100 bg-light p-4   detailsScreen">
      {/* Información del usuario */}
      <div className="card shadow-lg border-0 rounded-3 mb-5">
        <div className="card-header bg-primary text-white">
          <h1 className="card-title mb-0 display-5">{user.name}</h1>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <p className="card-text"><i className="bi bi-person-badge me-2"></i><strong>Username:</strong> {user.username}</p>
              <p className="card-text"><i className="bi bi-envelope me-2"></i><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="col-md-6">
              <p className="card-text"><i className="bi bi-phone me-2"></i><strong>Phone:</strong> {user.phone}</p>
              <p className="card-text"><i className="bi bi-building me-2"></i><strong>Company:</strong> {user.companyName}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-dark mb-4 display-6 fw-bold">Publicaciones</h2>

      {/* Carrusel de publicaciones */}
      {(!user.posts || user.posts.length === 0) ? (
        <div className="alert alert-info">
          El usuario no tiene publicaciones.
        </div>
      ) : (
        <PostsCarousel posts={user.posts} />
      )}

      {/* Botón para regresar */}
      <div className="mt-5 text-center">
        <button className="btn btn-lg btn-outline-primary" onClick={handleReturn}>
          <i className="bi bi-arrow-left-circle me-2"></i>Volver al Listado
        </button>
      </div>
    </div>
  );
};