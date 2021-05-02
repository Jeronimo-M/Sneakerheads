import React from 'react';
import { Link } from 'react-router-dom';


export default function Posts(props) {
  const { posts } = props;

  return (
    

      <div>
        {posts.map(post => (
        <React.Fragment key={post.id} >
        <Link to={`/posts/${post.id}`} className="post-card"><img className="post-image" src={post.photo_url} alt={post.title} /></Link>
        
        </React.Fragment>
        ))} 

          
      </div>
    
  )
}

