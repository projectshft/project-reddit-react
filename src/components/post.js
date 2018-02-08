import React, { Component } from 'react';

import { sendEvent } from '../state'

class Post extends Component {
  constructor (props) {
    super(props)
  }

  upVote = () => {
    sendEvent('upvote', this.props.post)
  }

  render() {
    return (
      <li>
        <span>{this.props.post.user} - {this.props.post.text} - upvotes: {this.props.post.upvotes}</span>
        <button onClick={this.upVote}>+</button>
      </li>
    )
  }
}

export default Post
