import React from 'react';
import Snippet from './Snippet';
import styles from '../youtube.module.css';

const SearchList = (props) => {
  const { result } = props;

  const onDetail = (snippetInfo) => {
    props.handleDetail(snippetInfo);
  };

  return (
    <>
      <div className={styles.search_list}>
        {result &&
          result.map((value) => (
            <Snippet key={value.etag} result={value} handleDetail={onDetail} />
          ))}
      </div>
    </>
  );
};

export default SearchList;
