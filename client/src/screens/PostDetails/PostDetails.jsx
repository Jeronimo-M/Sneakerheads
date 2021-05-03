import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postLike } from '../../services/like';
import "./PostDetails.css"



import { getOnePost } from '../../services/posts';

export default function PostDetail() {
  const [post, setPost] = useState(null)
    const [likes, setLikes] =useState(0)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    const fetchPost = async () => {
      const data = await getOnePost(id)
      console.log(id)
      setPost(data.post)
      setLikes(data.likes)
        setLoaded(true)
    }
    useEffect(() => {
        fetchPost()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }
  
    const handleLike = async (e) => {
      e.preventDefault() 
      await postLike(id)
      fetchPost()
      
    }
      

    
   
    return (
      <div className="post-detail">
          
                
                <img className="post-detail-image" src={post?.photo_url} alt={post?.title} />
                <div className="detail">
                    <div className="name">{post?.title}</div>
                    <div className="price">{`$${post?.price}`}</div>
                    <div className="details">{post?.content}</div>
                    <div className="contact-info">{post?.contact_info}</div>
                <span>{`❤️${likes}`}<button onClick={handleLike} className="like-button">Like</button></span>
                </div>
       
            </div>
        
    )
}