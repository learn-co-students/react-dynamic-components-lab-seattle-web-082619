import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <p>
        { this.props.commentText }
      </p>
    )
  }
}

export default Comment;