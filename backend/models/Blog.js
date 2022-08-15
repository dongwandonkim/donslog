const { Schema, model, Types } = require('mongoose');

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    isPublished: { type: Boolean, required: true, default: false },
    user: { type: Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const Blog = model('Blog', blogSchema);

module.exports = { Blog };
