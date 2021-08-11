import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

const App = () => {

  const data = [
    {label: "Иди гулять", important: true},
    {label: "Выгулять собаку", important: false},
    {label: "Не забыть Руби", important: false}
  ];

  return (
    <div>
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;
