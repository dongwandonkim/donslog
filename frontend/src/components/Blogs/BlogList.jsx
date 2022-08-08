import React from 'react';
import BlogListItem from './BlogListItem';

function BlogList() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between">
        <BlogListItem />
      </div>
    </div>
  );
}

export default BlogList;
