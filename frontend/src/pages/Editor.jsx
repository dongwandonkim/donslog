import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { postBlog } from '../store/reducers/blog.reducers';
import { useForm } from '../hooks/useForm';

function Editor() {
  const dispatch = useDispatch();
  const { isSubmitting } = useSelector((state) => state.blog);

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
          className="mb-5 h-12 text-2xl rounded"
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
        <div className="flex gap-5 mt-5 justify-between">
          <div className="flex items-center">
            <input
              type="text"
              name="tags"
              placeholder="tags"
              className="mr-5 h-12 text-2xl focus:none rounded"
            />
          </div>
          <div className="flex items-center justify-end gap-5">
            <div className="flex items-center">
              <input
                name="isPublished"
                type="checkbox"
                checked={values.isPublished || false}
                onChange={handleChange}
                className="rounded text-green-500"
              />
              <label
                htmlFor="isPublished"
                className="ml-2"
                onClick={handleChange}
              >
                Publish
              </label>
            </div>
            {isSubmitting ? (
              <button
                type="button"
                className="flex justify-center items-center bg-gray-100 w-60 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                disabled
              >
                <svg
                  class="animate-spin h-5 w-5 mr-3 border-b-2 border-gray-900 rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
                Saving...
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="bg-white w-60 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Editor;
