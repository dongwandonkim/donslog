const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
  try {
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
