import React from 'react';
import Snippet from './Snippet';
import styles from '../youtube.module.css';

const SearchList = (props) => {
  const { result } = props;

  return (
    <>
      {console.log(result)}
      <div className={styles.search_list}>
        {result &&
          result.map((value) => <Snippet key={value.etag} result={value} />)}
      </div>
    </>
  );
};

export default SearchList;
