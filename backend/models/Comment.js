const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    user: { type: ObjectId, required: true, ref: 'User' },
    blog: { type: ObjectId, required: true, ref: 'Blog' },
  },
  { timestamps: true }
);

const Comment = model('comment', commentSchema);

module.exports = { Comment };
