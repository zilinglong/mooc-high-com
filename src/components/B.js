import React, { Component } from 'react';
import A from './A';
class B extends Component {
  render() {
    return (
      <div>
        <p>这是B组件:</p>
        <div>
          <img src={require('./images/B.png')} alt="" />
        </div>
      </div>
    );
  }
}

export default A(B);
