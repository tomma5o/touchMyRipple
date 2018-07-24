import { ripple } from "../index";
import React from "react";

const withRipple = Wcomp => props => {
  const { color, eventName } = props.tmripple;
  return (
    <Wcomp
      onClick={e => {
        ripple.call(this, e, color, eventName);
        props.onClick && props.onClick.call(this, e);
      }}
    />
  );
};

export default withRipple;
