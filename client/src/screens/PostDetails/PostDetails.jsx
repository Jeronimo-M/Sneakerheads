import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postLike } from '../../services/like';



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
      // history.push(`/posts/${id}`)
    }
      

    
   
    return (
      <div className="post-detail">
          
                
                <img className="post-detail-image" src={post?.photo_url} alt={post?.title} />
                <div className="detail">
                    <div className="name">{post?.title}</div>
                    <div className="price">{`$${post?.price}`}</div>
                    <div className="details">{post?.content}</div>
                    
        </div>
        <span>{`❤️${likes}`}<button onClick={handleLike}>Like</button></span>
       
            </div>
        
    )
}