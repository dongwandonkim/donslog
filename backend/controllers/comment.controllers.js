const Comment = require('../models/Comment');
const { isValidObjectId } = require('mongoose');
const Blog = require('../models/Blog');

const createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { blogId } = req.params;

    if (!isValidObjectId(blogId))
      return res.status(400).send({
        success: false,
        message: 'Invalid blogId',
      });

    if (!isValidObjectId(req.user.id))
      return res.status(400).send({
        success: false,
        message: 'Invalid userId',
      });

    if (typeof content !== 'string')
      return res.status(400).send({
        success: false,
        message: 'content must be string type',
      });

    const blog = await Blog.findById(blogId).where({ isPublished: true });
    console.log(blog);
    if (!blog) {
      return res
        .status(400)
        .send({ success: false, message: 'blog does not exists' });
    }

    const comment = await Comment.create({
      content,
      user: req.user.id,
      blog: blogId,
    });

    return res.send({
      success: true,
      message: 'comment created',
      data: comment,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = { createComment };
