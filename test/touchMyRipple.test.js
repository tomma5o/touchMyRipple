const tmripple = require('./../index.js').tmripple;

test('settings are the same ?', () => {
    expect(tmripple.settings).toEqual({
        area: '',
        color: 'rgba(255, 255, 255, 0.4)',
        offsetEl: null,
        eventListener: 'click',
    });
});

//console.log(tmripple.init());

test('attachRippleToAttribute() generate error if no elements', () => {
    function makeError() {
        tmripple.attachRippleToAttribute();
    }
    expect(makeError).toThrowError('Selector/s not found');
});

test('ripple() generate error if no elements', () => {
    function allok() {
        tmripple.ripple(['<div class="ciccio"></div>'], 'red', 'click');
    }
    expect(allok).toThrowError('Selector/s not found');
});
