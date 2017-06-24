import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/';
import { Link } from 'react-router';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  renderField({
    input,
    label,
    meta: { touched, error }
  }) {
    return (
      <div className={`form-group ${(touched && error) ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <input {...input} placeholder={label} type="text" className="form-control"/>
        {touched && error && <span className="text-help">{error}</span>}
      </div>
    )
  }

  onFormSubmit(props) {
    this.props.createPost(props).
      then(() => {
        this.context.router.push('/');
      })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field name="title" component={this.renderField} label="Title"/>
        <Field name="categories" component={this.renderField} label="Categories"/>
        <Field name="content" component={this.renderField} label="Content"/>
        <button type="submit" className="btn btn-primary">Add</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = 'Please enter title!';
  }
  if (!values.categories) {
    errors.categories = 'Please enter categories!';
  }
  if (!values.content) {
    errors.content = 'Please enter content!';
  }
  return errors;
}

const CreatePostForm = reduxForm({
  form: 'AddPostForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(PostNew)

export default connect(null, { createPost })(CreatePostForm)
