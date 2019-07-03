import React, { Component } from 'react';

function A(WrappedComponent) {
  return class A extends Component {
    render() {
      return (
        <div className="a-container">
          <div className="header">
            <div>提示</div>
            <div>X</div>
          </div>
          <div className="content">
            内容区
            <WrappedComponent />
          </div>
        </div>
      );
    }
  };
}
// class A extends Component {
//   render() {
//     return (
//       <div className="a-container">
//         <div className="header">
//           <div>提示</div>
//           <div>X</div>
//         </div>
//         <div className="content">内容区</div>
//       </div>
//     );
//   }
// }

export default A;
