import { memo, useRef } from 'react';
import React from 'react';
import styles from '../youtube.module.css';

const SearchBar = memo((props) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const inputText = inputRef.current.value;
    inputText && props.handleSearch(inputText);
  };

  const onHandleHome = () => {
    formRef.current.reset();
    props.handleGoHome();
  };

  return (
    <div className={styles.searchbox}>
      <button className={styles.btn_logo} id='btn_logo' onClick={onHandleHome}>
        <i className='fab fa-youtube'></i>
        <span className={styles.title}>YouTube</span>
      </button>
      <form onSubmit={onSubmit} className={styles.searchform} ref={formRef}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search..'
          className={styles.inputbox}
        />
        <button className={styles.searchbtn} id='btn_search'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
});

export default SearchBar;
