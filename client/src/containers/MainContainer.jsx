import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPosts, postPost, putPost } from '../services/posts'
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';
import PostCreate from '../screens/PostCreate';
import PostEdit from '../screens/PostEdit';
import Profile from '../screens/Profile';

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

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
    history.push('/posts')
  }

  const handleEdit = async (id, formData) => {
    const postData = await putPost(id, formData);
    setPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? postData : post
    }))
    history.push('/posts')
  }


  return (
    <Switch>
      <Route path='/posts/:id/edit'>
        <PostEdit
          posts={posts}
          handleEdit={handleEdit}
        />
      </Route>
      <Route path='/posts/new'>
        <PostCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/posts/:id'>
        <PostDetails
          posts={posts}

        />
      </Route>
      <Route path='/posts'>
        <Posts
          posts={posts}

        />
      </Route>
      <Route path='/profile'>
        <Profile
          currentUser = {currentUser}

        />
      </Route>
      
    </Switch>
  )
}