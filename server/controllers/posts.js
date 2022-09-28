import PostMessage from '../models/postMessage';

const getPosts = (req, res) => {
  res.send('THIS WORKS!');
};

const createPost = (req, res) => {
  res.send('Post Creation');
};

export { getPosts, createPost };
