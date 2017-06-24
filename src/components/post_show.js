import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, hidePost, deletePost } from '../actions';

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.hidePost();
  }

  onDeletePost() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      })
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div className="single-post">
        <div className="row no-gutters justify-content-between">
          <Link to="/">Back to list</Link>
          <a href="#" onClick={this.onDeletePost.bind(this)} className="btn btn-danger pull-xs-right">Delete</a>
        </div>
        <h2>{post.title}</h2>
        <h5>{post.categories}</h5>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost, hidePost, deletePost })(PostShow);
