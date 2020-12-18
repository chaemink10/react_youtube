import React from 'react';
import styles from '../youtube.module.css';

const Snippet = (props) => {
  return (
    <>
      <button className={styles.snippet_box}>
        <div className={styles.snippet_imgbox}>
          <img
            src='https://via.placeholder.com/200x100'
            alt='동영상이미지'
            className={styles.snippet_img}
          />
        </div>
        <div className={styles.snippet_desc}>
          <p className={styles.snippet_tit}>제목</p>
          <p className={styles.snippet_subtit}>올린사람</p>
        </div>
      </button>
    </>
  );
};

export default Snippet;
