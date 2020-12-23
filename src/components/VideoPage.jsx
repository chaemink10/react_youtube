import React from 'react';

const VideoPage = (props) => {
  const { iframeID } = props;
  const url = 'https://www.youtube.com/embed/' + iframeID;

  return (
    <div>
      <iframe
        id={iframeID}
        type='text/html'
        width='720'
        height='405'
        src={url}
        frameBorder='0'
        allowFullScreen
        title={iframeID}
      ></iframe>
    </div>
  );
};

export default VideoPage;
