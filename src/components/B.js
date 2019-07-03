import React, { Component } from 'react';
// import A from './A';
import d from './D';
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

export default d(B);
