import PostMessage from '../models/postMessage.js';

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find({});

    return res.status(200).json(postMessage);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export { getPosts, createPost };
