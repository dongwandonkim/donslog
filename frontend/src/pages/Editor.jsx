import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch } from 'react-redux';
import { postBlog } from '../store/reducers/blog.reducers';
import { useForm } from '../hooks/useForm';

function Editor() {
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    content: '',
    isPublished: false,
  };
  const { handleSubmit, handleChange, handleEditorChange, values } = useForm({
    initialValues,
  });

  const onSubmit = (blogData) => {
    // console.log(blogData);
    dispatch(postBlog({ blogData }));
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

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          type="text"
          value={values.title || ''}
          onChange={handleChange}
          className="border-b-4 mb-5 h-12 text-2xl"
          placeholder="your title goes here"
        />
        <div className="flex-1">
          <MDEditor
            name="content"
            value={values.content}
            onChange={handleEditorChange}
            height={800}
          />
        </div>
        <input
          name="isPublished"
          type="checkbox"
          checked={values.isPublished || false}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Editor;
