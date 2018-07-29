import { ripple } from "../index";
import React from "react";

const _isIgnoredAttrPresent = (e, settings) => {
  var element = e.currentTarget;
  var ignoreAttr = settings.ignoreEls;
  var elAttributes = element.attributes;

  for (let el in ignoreAttr) {
    let currentAttr = elAttributes.getNamedItem(el);
    if (currentAttr) {
      var regex = new RegExp(ignoreAttr[el]);
      return regex.test(currentAttr.value);
    }
  }
  return false;
};

const withRipple = (Wcomp, GSetting) => props => {
  const settings = {
    color:
      (props.tmripple && props.tmripple.color) ||
      (GSetting && GSetting.color) ||
      "rgba(255,255,255, 0.5)",
    eventName:
      (props.tmripple && props.tmripple.eventName) ||
      (GSetting && GSetting.eventName) ||
      "click",
    ignoreEls: (GSetting && GSetting.ignoreEls) || {},
    disabled: (props.tmripple && props.tmripple.disabled) || false
  };

  return (
    <Wcomp
      {...props}
      onClick={e => {
        if (!settings.disabled && !_isIgnoredAttrPresent(e, settings)) {
          ripple.call(this, e, settings.color, settings.eventName);
        }
        props.onClick && props.onClick.call(this, e);
      }}
    />
  );
};

export default withRipple;
