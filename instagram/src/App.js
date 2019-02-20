import React, { Component } from 'react';
import Fuse from 'fuse.js';
import './App.css';
import dummyData from './dummy-data'; //import data contained in dummy-data.js

import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import PostPage from './components/PostContainer/PostPage';

class App extends Component {

  state = {
    posts: [],
    searchText: ""
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  //onChange event handler for the search input field
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    },
      () => this.search(this.state.searchText) //call the search function every time state is updated
    );
  }

  //fuzzy search with Fuse.js library
  search = searchText => {
    if(searchText.length > 0) {
      var options = {
        tokenize: true,
        findAllMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 1000,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "username",
          "comments.username",
          "comments.text"
        ]
      };
      var fuse = new Fuse(this.state.posts, options);
      var result = fuse.search(searchText);
      this.setState({ posts: result })
    }

    if(searchText.length === 0) {
      this.setState({ posts: dummyData });
    }
  }

  render() {
    return (
      <div className="App">
        <PostPage 
          value={this.state.searchText}
          handleChanges={this.handleChanges}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default authenticate(App)(Login);