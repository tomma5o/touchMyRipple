$(document).ready(function() {

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();

    // init
    tmripple.init();

    // attachToSelectors
    tmripple.attachToSelectors({
        selectors: '.addToCart',
        color: 'url("images/cat.png")',
        eventListener: 'mousedown'
    });

});
