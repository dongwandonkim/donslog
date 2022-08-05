import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../store/reducers/blog.reducers';

function Editor() {
  const dispatch = useDispatch();
  const { content, isPublished } = useSelector((state) => state.blog);
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    isPublished: false,
  });

  const onChangeHandler = (content) => {
    setBlog({ ...blog, content });
  };

  const onSubmit = () => {
    dispatch(createBlog(blog));
  };

  const onUploadClick = () => {
    const upload = document.createElement('input');
    upload.type = 'file';
    upload.onchange = (e) => {
      if (!upload.files) return;
      const file = upload.files[0];
      this.uploadImage(file);
    };
    upload.click();
  };

  const onIsPublishedCheck = (e) => {
    setBlog({ ...blog, isPublished: e.target.checked });
  };

  return (
    <div className="flex flex-col">
      <input
        name="title"
        type="text"
        className="border-b-4 mb-5 h-12 text-2xl"
        placeholder="your title goes here"
      />
      <div className="flex-1">
        <MDEditor
          value={blog.content}
          onChange={onChangeHandler}
          height={800}
        />
      </div>
      <input
        type="checkbox"
        checked={blog.isPublished}
        onChange={onIsPublishedCheck}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Editor;
