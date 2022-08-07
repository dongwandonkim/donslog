const { isValidObjectId } = require('mongoose');
const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
  try {
    const { title, content, isPublished } = req.body;

    if (typeof title !== 'string' || !title.length) {
      return res
        .status(400)
        .send({ success: false, message: 'Title is required' });
    }
    if (typeof content !== 'string' || !content.length) {
      return res
        .status(400)
        .send({ success: false, message: 'Content is required' });
    }
    if (typeof isPublished !== 'boolean') {
      return res
        .status(400)
        .send({ success: false, message: 'isPublish must be a boolean' });
    }
    if (!isValidObjectId(req.user.id)) {
      return res
        .status(400)
        .send({ success: false, message: 'userId is invalid' });
    }

    const blog = await Blog.create({
      title,
      content,
      isPublished,
      user: req.user.id,
    });

    return res.send({
      success: true,
      message: isPublished ? 'Blog created and published' : 'Blog created',
      data: blog,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.send(blog);
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const publishBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, {
      isPublished: true,
    });
    res.send(blog);
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.send(blog);
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  publishBlog,
  deleteBlog,
};
