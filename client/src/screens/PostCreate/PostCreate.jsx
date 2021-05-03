import { useState } from 'react';
import "./PostCreate.css"

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    photo_url: '',
    price: '',
    contact_info: '',
  })
  const { title, content, photo_url, price, contact_info } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className="create-form" onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Post</h3>
      <label>Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
        />
      </label>
      <label>Content:
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      <label>Photo URL:
        <input
          type='text'
          name='photo_url'
          value={photo_url}
          onChange={handleChange}
        />
      </label>
      <label>Price:
        <input
          type='text'
          name='price'
          value={price}
          onChange={handleChange}
        />
      </label>
      <label>Contact Info:
        <input
          type='text'
          name='contact_info'
          value={contact_info}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
