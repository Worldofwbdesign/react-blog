import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/';
import { Link } from 'react-router';

class IndexPosts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add post</Link>
        </div>
        <h1>List of Posts</h1>
      </div>

    )
  }
}

export default connect(null, { fetchPosts })(IndexPosts);
