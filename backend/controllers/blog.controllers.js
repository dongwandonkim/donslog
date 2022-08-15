const { isValidObjectId } = require('mongoose');
const { Blog } = require('../models');

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
    if (isPublished && typeof isPublished !== 'boolean') {
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
    const blogs = await Blog.find({ isPublished: true });
    res.send({
      success: true,
      message: 'retrieved all published blogs',
      data: blogs,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!isValidObjectId(blogId)) {
      return res
        .status(400)
        .send({ success: false, message: 'invalid blogId' });
    }

    const blog = await Blog.findById(blogId);
    res.send({ success: true, message: 'retrieved a blog post', data: blog });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!isValidObjectId(blogId)) {
      return res
        .status(400)
        .send({ success: false, message: 'invalid blogId' });
    }

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

    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { title, content, isPublished },
      {
        new: true,
        runValidators: true,
      }
    );
    res.send({ success: true, message: 'updated a blog post', data: blog });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const publishBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!isValidObjectId(blogId)) {
      return res
        .status(400)
        .send({ success: false, message: 'invalid blogId' });
    }

    const { isPublished } = req.body;

    if (typeof isPublished !== 'boolean') {
      return res
        .status(400)
        .send({ success: false, message: 'isPublish must be a boolean' });
    }

    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        isPublished,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.send({ success: true, message: 'the blog is published', data: blog });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!isValidObjectId(blogId)) {
      return res
        .status(400)
        .send({ success: false, message: 'invalid blogId' });
    }

    const blog = await Blog.findById(blogId);

    if (blog.isPublished) {
      return res
        .status(400)
        .send({ success: false, message: 'cannot delete published blog' });
    }

    await blog.remove();

    res.send({ success: true, message: 'the blog is deleted' });
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
