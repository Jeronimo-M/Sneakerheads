import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { getOnePost } from '../services/posts';

export default function PostDetail(props) {
  const [post, setPost] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const fetchedPost = await getOnePost(id)
            setPost(fetchedPost)
            setLoaded(true)
        }
        fetchPost()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
      <div className="post-detail">
          
                
                <img className="post-detail-image" src={post.photo_url} alt={post.title} />
                <div className="detail">
                    <div className="name">{post.title}</div>
                    <div className="price">{`$${post.price}`}</div>
                    <div className="details">{post.content}</div>
                    
                </div>
            </div>
        
    )
}