import React, { useState, useEffect, useCallback } from 'react';
import './app.css';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const App = () => {
  const [listData, setListData] = useState();

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

  const onSearch = useCallback((inputText) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputText}&key=AIzaSyCf_F1G4pIAXG2Al_-uOTFXfMhbS3iD9Sw`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setListData(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <SearchBar search={onSearch} />
      <SearchList result={listData} />
      {/* 리스트 - 카드형식*/}
      {/* 리스트상세 - 동영상, 상세, 오른쪽카드목록*/}
    </>
  );
};

export default App;
