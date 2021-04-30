import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPosts, postPost } from '../services/posts'
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';
import PostCreate from '../screens/PostCreate';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchPosts()
  }, [])

  const handleCreate = async (formData) => {
    const postData = await postPost(formData);
    setPosts(prevState => [...prevState, postData])
    history.push('/post')
  }


  return (
    <Switch>
      <Route path='/posts/:id'>
        <PostDetails
          posts={posts}

        />
      </Route>
      <Route path='/posts/new'>
        <PostCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/posts'>
        <Posts
          posts={posts}

        />
      </Route>
    </Switch>
  )
}