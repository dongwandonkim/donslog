import React from 'react';

function BlogListItem() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="">user name</div>
        <div className="">date</div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="">title</div>
            <div className="">content</div>
          </div>
          <div className="flex">
            <div className="">tags</div>
            <div className="">comments</div>
          </div>
        </div>
        <div className="">image</div>
      </div>
    </div>
  );
}

export default BlogListItem;
