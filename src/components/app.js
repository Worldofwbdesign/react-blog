import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        {this.props.children}
      </div>
    );
  }
}
