import React from 'react';
import Snippet from './Snippet';
import styles from '../youtube.module.css';

const SearchList = (props) => {
  const { result } = props;

  const onDetail = (id) => {
    props.detailClick(id);
  };

  return (
    <>
      <div className={styles.search_list}>
        {result &&
          result.map((value) => (
            <Snippet key={value.etag} result={value} detailClick={onDetail} />
          ))}
      </div>
    </>
  );
};

export default SearchList;
