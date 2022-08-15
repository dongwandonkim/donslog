const { Router } = require('express');
const router = Router();
const blogController = require('../controllers/blog.controllers');
const authController = require('../controllers/auth.controllers');

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    blogController.createBlog
  );

router
  .route('/:blogId')
  .get(blogController.getBlogById)
  .put(
    authController.protect,
    authController.restrictTo('admin'),
    blogController.updateBlog
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    blogController.deleteBlog
  );

router.patch(
  '/:id/publish',
  authController.protect,
  authController.restrictTo('admin'),
  blogController.publishBlog
);

module.exports = { blogRouter: router };
