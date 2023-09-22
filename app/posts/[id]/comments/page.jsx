
const fetchComments = async (id) => {
  await new Promise (resolve=>setTimeout(resolve,3000))
  
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post ({params}){
    const {id} = params
    const commnets = await fetchComments(id)

    return (
       <ul style={{fontSize:'15px'}}>
        {commnets.map(comment=>(
            <li key={comment.id}>
                <h4>{comment.name}</h4>
                <small>{comment.body}</small>
            </li>
        ))}
       </ul>
       
    )
}