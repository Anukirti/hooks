import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingAPI() {
    const [posts, setPosts] = useState([]) // to get all post List
    const [post, setPost] = useState({}) // used to get specific post
    const [id, setId] = useState(0) 

    const [idFromBtn, setIdFromBtn] = useState(1)

    const handleClick = () =>{
        setIdFromBtn(id)
    }
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [idFromBtn])
  return (
    <div>
        <input type ="text" value={id} onChange={e => setId(e.target.value)}></input>
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
        {/* list of all posts */}
        {/* <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))
      }
      </ul> */}
    </div>
  )
}

export default DataFetchingAPI
