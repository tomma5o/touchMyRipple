import tmripple from './src';
import React, {Component} from 'react';

export default function withRipple(WrappedComponent, settings) {
    return class extends Component {
      constructor(props) {
        super(props);
      }
  
      render() {
        return <WrappedComponent onClick={(e) => tmripple.ripple(e, "#ccc", "click")} {...this.props} />;
      }
    };
  }

