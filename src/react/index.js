import { ripple } from "../index";
import React from "react";

const withRipple = Wcomp => props => {
  const settings = {
    color: (props.tmripple && props.tmripple.color) || "rgba(255,255,255, 0.5)",
    eventName: (props.tmripple && props.tmripple.eventName) || "click"
  };
  return (
    <Wcomp
      {...props}
      onClick={e => {
        ripple.call(this, e, settings.color, settings.eventName);
        props.onClick && props.onClick.call(this, e);
      }}
    />
  );
};

export default withRipple;
