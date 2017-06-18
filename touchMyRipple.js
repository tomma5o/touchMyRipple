const touchMyRipple = () => {
    function ripple(els, rippleColor) {
        for (var i = 0; i < els.length; i += 1) {
            var currentBtn = els[i];

            currentBtn.addEventListener('touchstart', function (e) {
                var el = this.getBoundingClientRect(),
                    btnWidth = this.clientWidth,
                    rippleOffset = tmripple.settings.offsetEl,
                    headerHeight = rippleOffset ? rippleOffset.clientHeight : 0,
                    btnOffsetTop = el.top + headerHeight,
                    btnOffsetLeft = el.left,
                    posMouseX = e.changedTouches[0].pageX,
                    posMouseY = e.changedTouches[0].pageY + headerHeight,
                    rippleX = posMouseX - btnOffsetLeft,
                    rippleY = posMouseY - btnOffsetTop;

                var baseCSS = `position: absolute;
                               width: ${btnWidth * 2}px;
                               height: ${btnWidth * 2}px;
                               border-radius: 50%;
                               transition: transform 700ms, opacity 700ms;
                               transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
                               background: ${rippleColor};
                               top: ${rippleY - btnWidth}px;
                               left: ${rippleX - btnWidth}px;
                               transform: scale(0);
                               pointer-events: none;`;

                // Prepare the dom
                var rippleEffect = document.createElement('span');
                rippleEffect.style.cssText = baseCSS;

                // Add some css for prevent errors
                this.style.overflow = 'hidden';

                if (window.getComputedStyle(this).position !== 'absolute' || window.getComputedStyle(this).position !== 'fixed') {

                    this.style.position = 'relative';
                }

                this.appendChild(rippleEffect);

                // start animation
                setTimeout(() => {
                    rippleEffect.style.cssText = `${baseCSS} transform: scale(1); opacity: 0;`;
                }, 5);

                setTimeout(() => {
                    rippleEffect.remove();
                }, 700);
            });
        }

    }
    function attachRippleToAttribute (area, rippleColor) {

        var attributeEl = document.querySelectorAll(`${area} [data-animation='ripple']`);

        if (attributeEl.length > 0) {
            ripple(attributeEl, rippleColor);
        } else {
            throw new Error('Selector/s not found');
        }
    }

    function attachRippleToSelectors(selectors, rippleColor) {
        if (selectors) {
            var selectorsEl = document.querySelectorAll(selectors);
        } else {
            throw new Error('You have to enter at least 1 selector');
        }


        if (selectorsEl.length <= 0) {

            console.warn('No element found');
        }

        ripple(selectorsEl, rippleColor);
    }

    var tmripple = {

        settings: {
            area: '',
            color: 'rgba(255, 255, 255, 0.4)',
            offsetEl: null,
            eventListener: 'click',
        },

        init(data) {
            try {
                this.settings.area = (data && data.area) ? data.area : '';
                this.settings.color = (data && data.color) ? data.color : this.settings.color;
                this.settings.offsetEl = (data && data.offsetEl) ? this.setOffsetEl(data.offsetEl) : null;
                this.settings.eventListener = (data && data.eventListener) ? data.eventListener : 'click';


                attachRippleToAttribute(this.settings.area, this.settings.color);
            } catch (e) {
                console.error(e.message);
                console.error(e);
            }
        },

        attachToSelectors(data) {
            try {
                var rippleColor = data.color || this.settings.color;

                attachRippleToSelectors(data.selectors, rippleColor);
            } catch (e) {
                console.error(e.message);
                console.error(e);
            }
        },

        setOffsetEl(el) {
            this.settings.offsetEl = document.querySelector(el);
        },
    };
    return tmripple;
};

module.exports.tmripple = touchMyRipple();
