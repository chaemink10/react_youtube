import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import VideoPage from './components/VideoPage';
import styles from './youtube.module.css';

const App = ({ youtube }) => {
  const [listData, setListData] = useState();
  const [iframeData, setIframeData] = useState();

  useEffect(() => {
    youtube
      .mostPopular()
      .then((result) => {
        setListData(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  //조회
  const onSearch = useCallback((inputText) => {
    youtube
      .search(inputText)
      .then((result) => {
        result.items.map((value) => {
          return (value.id = value.id.videoId);
        });
        setListData(result.items);
        setIframeData();
      })
      .catch((error) => console.log('error', error));
  }, []);

  //snnipet 클릭
  const onDetailClick = useCallback((snippetInfo) => {
    setIframeData(snippetInfo);
  }, []);

  //home화면으로 이동
  const onHome = useCallback(() => {
    youtube
      .home()
      .then((result) => {
        setListData(result.items);
        setIframeData();
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.wrap}>
      <SearchBar handleSearch={onSearch} handleGoHome={onHome} />
      <section className={styles.detail}>
        {iframeData && (
          <div className={styles.video}>
            <VideoPage iframeInfo={iframeData} />
          </div>
        )}
        {listData && (
          <div className={iframeData ? styles.detail_list : ''}>
            <SearchList
              result={listData}
              handleDetail={onDetailClick}
              display={iframeData ? `grid` : `list`}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
