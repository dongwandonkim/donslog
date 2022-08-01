import React, { useState } from 'react';
import { Editor as WYSIWYG } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import uploadImageCallBack from '../helpers/imgurUploadImage';

function Editor() {
  const [value, setValue] = useState('');

  const onImagePasted = async (dataTransfer, setMarkdown) => {
    const files = [];
    for (let index = 0; index < dataTransfer.items.length; index += 1) {
      const file = dataTransfer.files.item(index);

      if (file) {
        files.push(file);
      }
    }
  };

  // function uploadImageCallBack(file) {
  //   return new Promise((resolve, reject) => {
  //     console.log(file);
  //     const xhr = new XMLHttpRequest();
  //     xhr.open('POST', 'https://api.imgur.com/3/upload');
  //     xhr.setRequestHeader('Authorization', 'Client-ID 109a0335d737883');
  //     let data = new FormData();
  //     data.append('image', file);
  //     xhr.send(data);
  //     console.log(data.get('image'));
  //     xhr.addEventListener('load', () => {
  //       const response = JSON.parse(xhr.responseText);
  //       resolve(response);
  //     });
  //     xhr.addEventListener('error', () => {
  //       const error = JSON.parse(xhr.responseText);
  //       reject(error);
  //     });
  //   });
  // }

  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 109a0335d737883');
      const data = new FormData(); // eslint-disable-line no-undef
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  return (
    <>
      <div>MDEditor</div>
      <WYSIWYG
        editorState={value}
        onEditorStateChange={setValue}
        toolbarClassName="rdw-storybook-toolbar"
        wrapperClassName="rdw-storybook-wrapper"
        editorClassName="rdw-storybook-editor"
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
          },
        }}
      />
    </>
  );
}

export default Editor;
