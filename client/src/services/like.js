import api from './api-helper';

export const postLike = async (post_id) => {
  const resp = await api.get(`/likes/${post_id}` );
  return resp.data;
}