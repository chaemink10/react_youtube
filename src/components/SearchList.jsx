import React from 'react';
import Snippet from './Snippet';
import styles from '../youtube.module.css';

const SearchList = ({ result, handleDetail, display }) => {
  console.log(display);
  return (
    <div className={styles.search_list}>
      {result &&
        result.map((value) => (
          <Snippet
            key={value.etag}
            result={value}
            handleDetail={handleDetail}
            display={display}
          />
        ))}
    </div>
  );
};

export default SearchList;
