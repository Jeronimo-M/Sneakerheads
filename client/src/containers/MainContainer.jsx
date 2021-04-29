import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPosts } from '../services/posts'
import Posts from '../screens/Posts';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);

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