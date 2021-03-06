import api from './api-helper';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const postPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
}

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
}

export const getUserPosts = async () => {
  const resp = await api.get(`/user-posts`);
  return resp.data
}