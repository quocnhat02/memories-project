import PostMessage from '../models/postMessage.js';

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find({});

    return res.status(200).json(postMessage);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createPost = (req, res) => {
  res.send('Post Creation');
};

export { getPosts, createPost };
