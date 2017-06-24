import axios from 'axios';
import { FETCH_POSTS, CREATE_POST, FETCH_POST, HIDE_POST, DELETE_POST } from './types';

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

export function fetchPost(id) {
  const url = `${ROOT_URL}/${id}${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function createPost(props) {
  const url = `${ROOT_URL}${API_KEY}`;
  const request = axios.post(url, props);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function deletePost(id) {
  const url = `${ROOT_URL}/${id}${API_KEY}`;
  const request = axios.delete(url);

  return {
    type: DELETE_POST,
    payload: request
  }
}

export function hidePost() {
  return {
    type: HIDE_POST
  }
}
