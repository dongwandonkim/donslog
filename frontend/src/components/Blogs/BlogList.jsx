import React from 'react';
import BlogListItem from './BlogListItem';

function BlogList() {
  return (
    <div className="flex flex-col items-center">
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
    </div>
  );
}

export default BlogList;
