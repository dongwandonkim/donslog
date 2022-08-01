import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function Editor() {
  const [value, setValue] = useState('');
  const [content, setContent] = useState('');

  const onChangeHandler = (v, e) => {
    console.log(v, e);
    setContent(v);
  };
  useEffect(() => {}, []);
  return (
    <>
      <MDEditor value={content} onChange={onChangeHandler} height={500} />
    </>
  );
}

export default Editor;
