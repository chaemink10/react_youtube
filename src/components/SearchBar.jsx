import { useRef } from 'react';
import React from 'react';
import styles from '../youtube.module.css';

const SearchBar = (props) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const inputText = inputRef.current.value;
    console.log(inputText);
    props.search(inputText);
  };

  return (
    <div className={styles.searchbox}>
      <div className={styles.logo}>
        <i className='fab fa-youtube'></i>
        <span className={styles.title}>YouTube</span>
      </div>
      <form onSubmit={onSubmit} className={styles.searchform}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search..'
          className={styles.inputbox}
        />
        <button className={styles.searchbtn}>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
