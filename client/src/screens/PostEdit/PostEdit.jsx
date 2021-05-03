import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import "./PostEdit.css"


export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    photo_url: '',
    price: '',
    contact_info: '',
  })
  const { title, content, photo_url, price, contact_info } = formData;
  const { posts, handleEdit } = props;
  const { id } = useParams();
  

  useEffect(()=> {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      console.log(postItem)
      setFormData({
        title: postItem.title,
        price: postItem.price,
        content: postItem.content,
        contact_info: postItem.contact_info,
        photo_url: postItem.photo_url
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
    <form className="edit-form" onSubmit={(e)=>{
      e.preventDefault();
      handleEdit(id, formData);
    }}>
      <h3>Edit Post</h3>
      <label>Title:
        <input
          className="title" 
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>Content:
        <input
          className="content" 
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      <label>Photo URL:
        <input
          className="photo_url" 
          type='text'
          name='photo_url'
          value={photo_url}
          onChange={handleChange}
        />
      </label>
      <label>Price:
        <input
          className="price" 
          type='text'
          name='price'
          value={price}
          onChange={handleChange}
        />
      </label>
      <label>Contact Info:
        <input
          className="contact_info" 
          type='text'
          name='contact_info'
          value={contact_info}
          onChange={handleChange}
        />
      </label>
      
      <button className="submit-button">Submit</button>
      
    </form>
  )
}

