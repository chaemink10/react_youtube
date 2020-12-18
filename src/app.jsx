import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const App = () => {
  const [listData, setListData] = useState();

  useEffect(()=> {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC94Fr5Lg1EjR_JhhuzCCNEqU1UwKQSy_k',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setListData(result.items);
      })
      .catch((error) => console.log('error', error));
  }, [])

  return (
    <>
      <SearchBar />
      <SearchList result={listData} />
      {/* 리스트 - 카드형식*/}
      {/* 리스트상세 - 동영상, 상세, 오른쪽카드목록*/}
    </>
  );
};

export default App;
