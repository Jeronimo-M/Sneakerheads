import React from 'react'
import { useEffect, useState } from 'react'
import { getUserPosts, deletePost } from '../../services/posts'
import { Link } from 'react-router-dom'
import "./Profile.css"

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

  const handleDelete = async (id) => {
    await deletePost(id);
    setUserPosts(prevState => prevState.filter(post => post.id !== id))
  }

  return (
    <div className="profile">
      <div>
        <Link to="/posts/new">
          <button className="create-button">Post New Sneaker</button>
        </Link>

      </div>
      {userPosts.map(post => (
        <React.Fragment key={post.id} >
          <div className="post-card"><img className="post-image" src={post.photo_url} alt={post.title} /></div>
          <Link
            className="edit-link"
            to={`/posts/${post.id}/edit`}>
            <button className="edit-button">Edit</button>
          </Link>
          <button className="delete-button" onClick={()=>handleDelete(post.id)}>Delete</button>
        </React.Fragment>
      ))}
    </div>
  )
}
