import React, { useEffect, useState, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../store/reducers/blog.reducers';
import useElementSize from '../hooks/useElementSize';

function Editor() {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.blog);
  const editorWrapper = useRef(null);
  const height = useElementSize(editorWrapper);

  const onChangeHandler = (v, e) => {
    console.log(v, e);
    dispatch(createBlog(v));
  };

  const onSubmit = () => {};

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
  useEffect(() => {
    console.log('editor', height);
  }, [height]);

  return (
    <div ref={editorWrapper} className="flex flex-col">
      <input
        name="title"
        type="text"
        className="border-b-4 mb-5 h-12 text-2xl"
        placeholder="your title goes here"
      />
      <div className="flex-1">
        <MDEditor
          value={content}
          onChange={onChangeHandler}
          height={height}
          onHeightChange={(value, prev, state) => {
            console.log(value, prev, state);
          }}
        />
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Editor;
