import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    photo_url: '',
    price: '',
    contact_info: '',
  })
  const { name } = formData;
  const { posts, handleEdit } = props;
  const { id } = useParams();

  useEffect(()=> {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id) )
      setFormData({
        name: postItem.name
      })
    }
    if (posts.length) {
      prefillFormData();
    }
  }, [posts])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handleEdit(id, formData);
    }}>
      <h3>Edit Post</h3>
      <label>Title:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}

