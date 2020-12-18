import React from 'react';
import Snippet from './Snippet';
import styles from '../youtube.module.css';

const SearchList = (props) => {
  console.log(props);
  return (
    <div className={styles.search_list}>
      <Snippet />
    </div>
  );
};

export default SearchList;
