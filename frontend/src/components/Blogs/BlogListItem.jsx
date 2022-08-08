import React from 'react';

function BlogListItem() {
  return (
    <div className="border-b-2">
      <div className="flex flex-col my-4 w-full xs:w-[360px] md:min-w-[600px]">
        <div className="flex justify-between">
          <div className="">user name</div>
          <div className="">date</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="">title</div>
              <div className="invisible md:visible">content</div>
            </div>
            <div className="flex">
              <div className="">tags</div>
              <div className="">comments</div>
            </div>
          </div>
          <div className="self-center">image</div>
        </div>
      </div>
    </div>
  );
}

export default BlogListItem;
