import React, { useRef } from 'react';
import styles from '../youtube.module.css';

const Snippet = (props) => {
  const { snippet } = props.result;
  const inputEl = useRef(null);

  //Click
  const onHandleClick = (event) => {
    event.preventDefault();
    props.handleDetail(props.result);
  };

  return (
    <button
      className={styles.snippet_box}
      onClick={onHandleClick}
      ref={inputEl}
    >
      <div className={styles.snippet_imgbox}>
        <img
          src={snippet.thumbnails.default.url}
          alt={snippet.title}
          className={styles.snippet_img}
        />
      </div>
      <div className={styles.snippet_desc}>
        <p className={styles.snippet_tit}>{snippet.title}</p>
        <p className={styles.snippet_subtit}>{snippet.channelTitle}</p>
      </div>
    </button>
  );
};

export default Snippet;
