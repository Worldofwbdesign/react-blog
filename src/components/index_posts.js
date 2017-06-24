import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/';
import { Link } from 'react-router';

class IndexPosts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log(this.props.posts);
    if (Object.prototype.toString.call(this.props.posts) !== '[object Array]') {
      return <div>Loading</div>
    }
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item justify-content-between" key={post.id}>
          <Link className="list-group-link" to={`posts/${post.id}`}>
            <h3>{post.title}</h3>
            <span>{post.categories}</span>
          </Link>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">Add post</Link>
        </div>
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(IndexPosts);
