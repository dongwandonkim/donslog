import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../store/reducers/blog.reducers';

function Editor() {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.blog);

  const onChangeHandler = (v, e) => {
    console.log(v, e);
    dispatch(createBlog(v));
  };

  const onSubmit = () => {};

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          className="border-b-4 mb-5 focus:border-black-500 focus:ring-offset-0"
        />
      </div>
      <MDEditor value={content} onChange={onChangeHandler} height={500} />
      <button>Submit</button>
    </>
  );
}

export default Editor;
