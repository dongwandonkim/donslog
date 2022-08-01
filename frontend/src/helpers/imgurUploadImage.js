import axios from 'axios';

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    console.log(file);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/upload');
    xhr.setRequestHeader('Authorization', 'Client-ID 109a0335d737883');
    let data = new FormData();
    data.append('image', file);
    xhr.send(data);
    console.log(data.get('image'));
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

export default uploadImageCallBack;
