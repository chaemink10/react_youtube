import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import VideoPage from './components/VideoPage';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const App = () => {
  const [listData, setListData] = useState();
  const [iframeData, setIframeData] = useState();

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCf_F1G4pIAXG2Al_-uOTFXfMhbS3iD9Sw',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setListData(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);

  //조회
  const onSearch = useCallback((inputText) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&key=AIzaSyCf_F1G4pIAXG2Al_-uOTFXfMhbS3iD9Sw`,
      requestOptions
    )
      .then((response) => response.json())
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
    setListData();
    setIframeData(snippetInfo);
  }, []);

  return (
    <>
      <SearchBar searchHandle={onSearch} />
      {listData && <SearchList result={listData} detailClick={onDetailClick} />}
      {iframeData && <VideoPage iframeInfo={iframeData} />}
    </>
  );
};

export default App;
