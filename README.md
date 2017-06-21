# touchMyRipple

<!--![image of touchMyRipple]()-->

touchMyRipple ( tmripple for short ) is a simple library who integrate ripple effect in your fantastic site!

## Installation
```javascript
    npm install touchmyripple --save
```
or
```html
<script src="myDirectory/touchMyRipple.js"></script>
```

## Methods

### **init(settings[Object])**

This method activate the ripple effect at all the elemets have the attribute _data-animation="ripple"_

`settings[Object]`
```javascript
{
    // area is an option for make data-animation more specific
    area: 'class, id [string]',

    // color...🤔 
    color: 'rgba, hex, hsla[string]', 

    // remove from the height calcs the element passed
    offsetEl: 'class, id [string]',

    // this option accept an event listener 
    eventListener: 'event[string]'
}
```

### **attachToSelectors(settings[Object])**

This method activate the ripple effect at all the elemets match the class passed in 'selectors'

`settings[Object]`
```javascript
    {
        // selector of the element you want to attach the ripple
        selectors: 'class, id [string]',

        // color...🤔🤔🤔🤔🤔🤔
        color: 'rgba, hex, hsla[string]',

        // remove from the height calcs the element passed
        offsetEl: 'class, id [string]',

        // this option accept an event listener 
        eventListener: 'event[string]'
    }
```


## Basic Usage

`index.js`
```javascript
const tmripple = require('touchmyripple');

tmripple.init({
    color: '#bada55', // default is 'rgba(255, 255, 255, 0.4)'
    eventListener: 'touchstart' // default is 'click'
});

tmripple.attachToSelectors({
    selectors: '#foo .bar [type=button]',
    color: 'rgba(0, 0, 0, 0.4)',
    eventListener: 'mousedown'
});
