import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {label: "Иди гулять", important: true, id: 1},
        {label: "Выгулять собаку", important: false, id: 2},
        {label: "Не забыть Руби", important: false, id: 3}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const before = data.slice(0, index);
      const after = data.slice(index +1);

      const newArray = [...before, ...after];
      return {
        data: newArray
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArray = [...data, newItem];
      return {
        data: newArray
      }
    });
  }

  render() {
    return (
      <div>
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList posts={this.state.data}
        onDelete={this.deleteItem}/>
        <PostAddForm
        onAdd={this.addItem}/>
      </div>
    )
  }
}
