import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllPosts, putPost } from '../services/posts'
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';

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
      <Route path='/posts/:id'>
        <PostDetails
          posts={posts}
          
        />
      </Route>
    </Switch>
  )
}