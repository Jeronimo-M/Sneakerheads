import React from 'react';
import { Link } from 'react-router-dom';
import "./Posts.css"

export default function Posts(props) {
  const { posts } = props;

  return (
    

      <div className="posts">
        {posts.map(post => (
        <React.Fragment key={post.id} >
            <Link to={`/posts/${post.id}`}>
              <div>
                <img className="post-image" src={post.photo_url} alt={post.title}/>
                <div>
                  <div className="middle-name">{post.title}</div>
                  <div className="middle-price">${post.price}</div>
                </div>
              </div>

            </Link>
        
        </React.Fragment>
        ))} 

          
      </div>
    
  )
}

