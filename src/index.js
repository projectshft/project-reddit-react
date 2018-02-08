import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostForm from './components/post-form';
import PostsList from './components/posts-list';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { onUpdate, forceUpdate, sendEvent } from './state'

class App extends Component {
  constructor (props) {
    super(props)
  }

  addPost = (post) => {
    sendEvent('addPost', post)
  }

  toggleVisible = () => {
    sendEvent('togglePosts', !this.props.showPosts)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header">
            <h1>Project Reddit</h1>
          </div>

          <button onClick={this.toggleVisible}>Toggle</button>

          { this.props.showPosts ? <PostsList posts={this.props.posts} /> : null }

          <PostForm addPost={this.addPost} />
        </div>
      </div>
    );
  }
}

// Cache the element we'll be rendering to.
const root = document.querySelector('#root');

// When the state changes, re-render our app!
onUpdate((state) => {
  ReactDOM.render(
    <App posts={state.posts} showPosts={state.showPosts}/>,
    root
  );
});

// Trigger the initial update so our app will render for the first time.
forceUpdate();
