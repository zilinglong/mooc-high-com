import React, { Component } from 'react';
function d(WrappedComponent) {
  return class D extends Component {
    render() {
      return (
        <div>
          我是高阶组件：
          <WrappedComponent />
        </div>
      );
    }
  };
}

export default d;
