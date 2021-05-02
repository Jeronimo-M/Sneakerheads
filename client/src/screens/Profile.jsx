import React from 'react'
import { useEffect, useState } from 'react'
import { getUserPosts } from '../services/posts'
import { Link } from 'react-router-dom'

export default function Profile(props) {
  const [userPosts, setUserPosts] = useState([])
  const { currentUser } = props;
  
  useEffect(() => {
    const fetchUserPosts = async () => {
      const postData = await getUserPosts()
      setUserPosts(postData)
    }
    if (currentUser) {
      fetchUserPosts()

    }
  }, [currentUser])  
  return (
    <div>
      {userPosts.map(post => (
        <React.Fragment key={post.id} >
        <div className="post-card"><img className="post-image" src={post.photo_url} alt={post.title} /></div>
          <button>Edit</button>
          <button>Delete</button>
        </React.Fragment>
      ))}
      <Link to="/posts/new">
      <button>Create</button>
      </Link>
    </div>
  )
}
