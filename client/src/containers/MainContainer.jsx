import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllPosts } from '../services/posts'
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchPosts()
  }, [])  
  
  

  
  return (
    <Switch>
      <Route path='/posts'>
        <Posts
          posts={posts}
          
        />
      </Route>
    </Switch>
  )
}