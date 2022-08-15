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

// router
//   .route('/:blogId')
//   .get(commentController.getBlogById)
//   .put(
//     authController.protect,
//     authController.restrictTo('admin'),
//     commentController.updateBlog
//   )
//   .delete(
//     authController.protect,
//     authController.restrictTo('admin'),
//     commentController.deleteBlog
//   );

// router.patch(
//   '/:id/publish',
//   authController.protect,
//   authController.restrictTo('admin'),
//   commentController.publishBlog
// );

module.exports = router;
