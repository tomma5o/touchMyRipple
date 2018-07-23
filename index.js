import tmripple from './src';
import React from 'react';

const withRipple = Wcomp => props => {
    const { color, eventName } = props.tmripple;
    return (
      <Wcomp
        onClick={e => {
          props.onClick.call(this, e);
          tmripple.ripple.call(this, e, color, eventName);
        }}
      />
    );
  };

export default withRipple;