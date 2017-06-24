const tmripple = require('./../index.js').tmripple;

test('settings are the same ?', () => {
    expect(tmripple.settings).toEqual({
        area: '',
        color: 'rgba(255, 255, 255, 0.4)',
        offsetEl: null,
        eventListener: 'click',
    });
});

// test('', () => {

// });
