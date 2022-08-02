import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function Editor() {
  const [value, setValue] = useState('');
  const [content, setContent] = useState('');

  const onChangeHandler = (v, e) => {
    console.log(v, e);
    setContent(v);
  };

  const onSubmit = () => {};

  useEffect(() => {}, []);

  return (
    <>
      <MDEditor value={content} onChange={onChangeHandler} height={500} />
      <button>Submit</button>
    </>
  );
}

export default Editor;
