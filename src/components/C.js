import React, { Component } from 'react';
import A from './A';
class C extends Component {
  render() {
    return (
      <div>
        <p>这是C组件:</p>
        <div>
          <img src={require('./images/C.png')} alt="" />
        </div>
      </div>
    );
  }
}

export default A(C);
