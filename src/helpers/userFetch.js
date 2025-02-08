export const userFetch = async() => {
  
  const userslink = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const userData = await userslink.json()
  
  const usersPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const Posts = await usersPosts.json()

  const usersComments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const Comments = await usersComments.json()

  const users = userData.map((user) => {
   return { id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            companyName: user.company.name,
            posts: Posts.filter((post) => {
               return post.userId === user.id
            }).map((post) =>{
                return { postid: post.id, 
                         posttitle: post.title,
                         postbody: post.body,
                         comments: Comments.filter(comment => 
                             comment.postId === post.id
                        )
                }
            }),
            


}

  });

  console.log(users)
  return users
  
  
   
}
