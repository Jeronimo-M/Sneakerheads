import React from 'react';
import { Link } from 'react-router-dom';

export default function Posts(props) {
  const { posts, handleDelete, currentUser } = props;
  return (
    <div>
      <h3>Posts</h3>
      {posts.map(post => (
        <React.Fragment key={post.id}>
          <Link to={`/posts/${post.id}`}><img className="post-image" src={post.photo_url} alt={post.title} /></Link>
          {
            currentUser?.id === post.user_id &&
            <>
              {/* <Link to={`/posts/${post.id}/edit`}><button>edit</button></Link>
              <button onClick={() => handleDelete(post.id)}>delete</button> */}
            </>
          }
        </React.Fragment>
      ))}
      <br />
      {/* <Link to='/posts/new'><button>create</button></Link> */}
    </div>
  )
}

