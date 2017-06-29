# touchMyRipple

<!--![image of touchMyRipple]()-->

touchMyRipple ( tmripple for short ) is a simple library that integrate ripple effect in your fantastic site!<br>
[**Demo & Documentation**](https://tomma5o.github.io/touchMyRipple/#line3)

## Installation
 
[**Download Build**](https://raw.githubusercontent.com/tomma5o/touchMyRipple/master/dist/touchMyRipple.js)

```html
<script src="myDirectory/touchMyRipple.js"></script>
```
or
```javascript
npm install touchmyripple --save
```

## Methods

### **init(settings[Object])**

This method enables ripple effect to all the elements that have the attribute _data-animation="ripple"_.<br>
_All the following options are optional_


`settings[Object]`
```javascript
{
    // area is an option to make data-animation more specific
    area: 'class, id',

    // color...🤔 
    color: 'rgba, hex, hsla', 

    // pass the scrolling element if it's not window
    offsetEl: 'class, id',

    // this option accept an event listener 
    eventListener: 'event'
}
```

### **attachToSelectors(settings[Object])**

This method enables ripple effect to all the elements that match the class passed in 'selectors'

`settings[Object]`
```javascript
    {
        // selector of the element you want to attach the ripple ( is required )
        selectors: 'class, id',

        // color...🤔🤔🤔🤔🤔🤔
        color: 'rgba, hex, hsla',

        // pass the scrolling element if it's not window
        offsetEl: 'class, id',

        // this option accept an event listener 
        eventListener: 'event'
    }
```


## Basic Usage

`index.js`
```javascript
import tmripple from 'touchmyripple';

tmripple.init({
    color: '#bada55', // default is 'rgba(255, 255, 255, 0.4)'
    eventListener: 'touchstart' // default is 'click'
});

tmripple.attachToSelectors({
    selectors: '#foo .bar [type=button]',
    color: 'rgba(0, 0, 0, 0.4)',
    eventListener: 'mousedown'
});
