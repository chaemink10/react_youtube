import React, { useState } from 'react';
import './app.css';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

const App = () => {
  let obj;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC94Fr5Lg1EjR_JhhuzCCNEqU1UwKQSy_k',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      //obj = result.items;
      test(result.items);
    })
    .catch((error) => console.log('error', error));

  function test(result) {
    obj = result;
  }
  console.log(obj);
  //const [items, setItems] = useState(obj);

  return (
    <>
      <SearchBar />
      <SearchList result={items} />
      {/* 리스트 - 카드형식*/}
      {/* 리스트상세 - 동영상, 상세, 오른쪽카드목록*/}
    </>
  );
};

export default App;
