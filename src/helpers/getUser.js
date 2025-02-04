
export const getUser = async(name) => {
  
  const url = `https://jsonplaceholder.typicode.com/users`;
  const resp = await fetch(url);
  const data = await resp.json();
  const users = data.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    company: user.company
  }));

  
  const postsResp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await postsResp.json();
  const commentsResp = await fetch('https://jsonplaceholder.typicode.com/comments');
  const commentsData = await commentsResp.json();

  // Agregar a cada usuario sus publicaciones y, dentro de cada publicación, sus comentarios
  const usersWithPosts = users.map(user => {
    const userPosts = postsData
      .filter(post => post.userId === user.id)
      .map(post => ({
        id: post.id,
        title: post.title,
        body: post.body,
        comments: commentsData.filter(comment => comment.postId === post.id)
      }));
    return { ...user, posts: userPosts };
  });

  // Filtrar usuarios según el nombre ingresado
  
  const userFiltered = usersWithPosts.filter(user => 
    user.name.toLowerCase().includes(name.trim().toLowerCase())
  );

  console.log("Usuarios filtrados:", userFiltered);
  return userFiltered;
};
