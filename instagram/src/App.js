import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'; //import data contained in dummy-data.js

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;