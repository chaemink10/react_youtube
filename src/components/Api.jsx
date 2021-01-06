import { render } from '@testing-library/react';
import React from 'react';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const api = (props) => {
  fetch(
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCf_F1G4pIAXG2Al_-uOTFXfMhbS3iD9Sw',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // setListData(result.items);
    })
    .catch((error) => console.log('error', error));

  return();
};

export default api;
