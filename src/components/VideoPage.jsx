import React from 'react';

const VideoPage = (props) => {
  const { id, descript } = props.iframeInfo;
  const url = 'https://www.youtube.com/embed/' + id;

  return (
    <div>
      <iframe
        id={id}
        type='text/html'
        width='720'
        height='405'
        src={url}
        frameBorder='0'
        allowFullScreen
        title={descript}
      ></iframe>
    </div>
  );
};

export default VideoPage;
