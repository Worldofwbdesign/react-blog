import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import { createPost } from '../actions/';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  renderField({
    input,
    label,
    type,
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

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
}

const validate = values => {
  let errors = {};

  if (!values.title) {
    errors.title = 'Please enter title!';
  }

  return errors;
}

export default reduxForm({
  form: 'AddPostForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(PostNew)
