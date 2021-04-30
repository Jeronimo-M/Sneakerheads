import { useState } from 'react';


export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    photo_url: '',
    price: '',
    contact_info: '',
  })
  const { name } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Create Post</h3>
      <label>Title:
        <input
          type='text'
          name='title'
          value={name.title}
          onChange={handleChange}
        />
      </label>
      <label>Content:
        <input
          type='text'
          name='content'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
