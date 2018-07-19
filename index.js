import tmripple from './src';
import React, {Component} from 'react';

function _getDisplayName(WrappedComponent) {
return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withRipple(WrappedComponent) {
  return class extends React.Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    componentDidMount() {
      // to improve
      if (this.button && this.button.updater.isMounted(this.button)) {
        const { color, eventName } = this.props.tmripple;
        const buttonEl = ReactDOM.findDOMNode(this.button);

        buttonEl.addEventListener("click", e =>          tmripple.ripple.call(this, e, color, eventName)
        );
      }
    }

    render() {
      return <WrappedComponent ref={el => (this.button = el)} />;
    }
  };
}

// function withRipple(WrappedComponent) {
// return class extends Component {
//     static displayName = `HOC(${_getDisplayName(WrappedComponent)})`;
//     render() {
//     const { color, eventName } = this.props.tmripple;
//     return (
//         <div
//         onClick={e => {
//             tmripple.ripple.call(this, e, color, eventName);
//         }}
//         >
//         <WrappedComponent />
//         </div>
//     );
//     }
// };
// }

export default withRipple;