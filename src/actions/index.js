import axios from 'axios';
import { FETCH_POSTS } from './types';

const API_KEY = '?key=36567567esgdfhghfjtygkhj';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';

export function fetchPosts() {
  const url = `${ROOT_URL}${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
