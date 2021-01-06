import React, { useRef } from 'react';
import styles from '../youtube.module.css';

const Snippet = ({ result, result: { snippet }, handleDetail, display }) => {
  const styleName =
    display === 'list' ? styles.snippet_list : styles.snippet_grid;

  const inputEl = useRef(null);

  //Click
  const onHandleClick = (event) => {
    event.preventDefault();
    handleDetail(result);
  };

  return (
    <div className={styleName}>
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
    </div>
  );
};

export default Snippet;
