import React from 'react';

import  { useState } from 'react';

export const UserCard = ({ user }) => {
  const [currentPost, setCurrentPost] = useState(0);

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % user.posts.length);
  };

  const prevPost = () => {
    setCurrentPost((prev) => (prev - 1 + user.posts.length) % user.posts.length);
  };

  return (
    <div className="cardcontent">
      
      <div className="user-info">
        <div className="card-header">
          <h5>{user.name}</h5>
        </div>
        <div className="card-body">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Empresa:</strong> {user.company.name}</p>
        </div>
      </div>

      {/* Carrusel de publicaciones */}
      <div className="user-posts">
        <h3>Publicaciones</h3>
        {user.posts.length > 0 ? (
          <div className="post-carousel">
            <button className="carousel-btn left" onClick={prevPost}>◀</button>
            <div className="post-card">
              <h4 className="post-title">📌 {user.posts[currentPost].title}</h4>
              <p className="post-body">{user.posts[currentPost].body}</p>
              <h5 className="comments-header">💬 Comentarios</h5>

              {/* Carrusel de comentarios */}
              {user.posts[currentPost].comments.length > 0 ? (
                <div className="comment-grid">
                  {user.posts[currentPost].comments.map((comment) => (
                    <div key={comment.id} className="comment-card">
                      <h6 className="comment-title">✍️ {comment.name}</h6>
                      <p className="comment-email">📧 {comment.email}</p>
                      <p className="comment-body">{comment.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-comments">No hay comentarios para esta publicación.</p>
              )}
            </div>
            <button className="carousel-btn right" onClick={nextPost}>▶</button>
          </div>
        ) : (
          <p className="no-posts">No hay publicaciones para este usuario.</p>
        )}
      </div>
    </div>
  );
};
