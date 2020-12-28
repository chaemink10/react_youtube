import React from 'react';
import styles from '../youtube.module.css';

const VideoPage = (props) => {
  const { id, snippet } = props.iframeInfo;
  const url = 'https://www.youtube.com/embed/' + id;
  const vidoeDate = new Date(snippet.publishedAt);

  return (
    <div className={styles.video_contents}>
      <div className={styles.video_area}>
        <iframe
          id={id}
          type='text/html'
          width='100%'
          height='405'
          src={url}
          frameBorder='0'
          allowFullScreen
          title={snippet.description}
        ></iframe>
        <div className={styles.video_info}>
          <span className={styles.video_channel}>{snippet.channelTitle}</span>
          <h2 className={styles.video_title}>{snippet.title}</h2>
          <p className={styles.video_date}>
            {vidoeDate.getFullYear()}.{vidoeDate.getMonth() + 1}.
            {vidoeDate.getDate() - 1}
          </p>
          <p className={styles.video_description}>{snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
