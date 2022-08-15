const { Router } = require('express');
const router = Router({ mergeParams: true });
const commentController = require('../controllers/comment.controllers');
const authController = require('../controllers/auth.controllers');

router
  .route('/')
  .get(commentController.getAllComments)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'user'),
    commentController.createComment
  );

module.exports = { commentRouter: router };
