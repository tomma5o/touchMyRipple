;(function(window){

    function ripple (els, rippleColor) {

        for (var i = 0; i < els.length; i++) {
            var currentBtn = els[i];

            currentBtn.addEventListener("touchstart", function(e) {

                var el = this.getBoundingClientRect(),
                    btnWidth = this.clientWidth,
                    headerHeight = (RippleEffect.offsetEl !== null && RippleEffect.offsetEl !== undefined) ? RippleEffect.offsetEl.clientHeight : 0,
                    btnOffsetTop = el.top + headerHeight,
                    btnOffsetLeft = el.left,
                    posMouseX = e.changedTouches[0].pageX,
                    posMouseY = e.changedTouches[0].pageY + headerHeight,
                    rippleX = posMouseX - btnOffsetLeft,
                    rippleY = posMouseY - btnOffsetTop;

                var baseCSS = "position: absolute; width:" + btnWidth * 2 + "px; height: " + btnWidth * 2 + "px; border-radius: 50%; transition: transform 700ms, opacity 700ms; transition-timing-function:cubic-bezier(0.250, 0.460, 0.450, 0.940); background: " + rippleColor + "; top: " + (rippleY - btnWidth) + "px; left:" + (rippleX - btnWidth) + "px; transform:scale(0); pointer-events: none;";

                var rippleEffect = document.createElement("span");
                rippleEffect.style.cssText = baseCSS;

                //prepare the dom
                this.style.overflow = "hidden";

                if ( window.getComputedStyle(this).position !== "absolute" || window.getComputedStyle(this).position !== "fixed") {

                    this.style.position = "relative";
                }

                this.appendChild(rippleEffect);

                //start animation
                setTimeout( function() {
                    rippleEffect.style.cssText = baseCSS + "transform:scale(1); opacity: 0;";
                }, 5);

                setTimeout( function() {
                rippleEffect.remove();
                },700);
            });
        }

    }

    function attachRippleAttribute (area, rippleColor) {

        var attributeEl = document.querySelectorAll(area + " [data-animation='ripple']");

        if (attributeEl.length > 0) {

            ripple(attributeEl, rippleColor);

        } else {

            throw new Error("Selector/s not found");
        }
    }

    function attachRippleSelectors (selectors, rippleColor) {

        if (selectors) {

            var selectorsEl = document.querySelectorAll(selectors);

        } else {
            throw new Error("You have to enter at least 1 selector");
        }


            if (selectorsEl.length <= 0) {

                console.warn("No element found");
            }

        ripple(selectorsEl, rippleColor);
    }

    var RippleEffect = {

        defaultColor: "rgba(255, 255, 255, 0.4)",
        offsetEl: null,

        init(data) {
            try {
                this.defaultColor = (data && data.defaultColor) ? data.defaultColor : this.defaultColor;
                if (data && data.offsetEl) {
                    this.setOffsetEl(data.offsetEl);
                }

                var area = (data && data.area) ? data.area : "";
                attachRippleAttribute( area, this.defaultColor);

            } catch (e) {
                console.error(e.message);
                console.error(e);
            }
        },

        setOffsetEl(el) {
            this.offsetEl = document.querySelector(el);
        },

        attachToSelectors(data) {
            try {

                var rippleColor = data.color || this.defaultColor;
                attachRippleSelectors(data.selectors, rippleColor);

            } catch (e) {
                console.error(e.message);
                console.error(e);
            }
        }
    };

    window.tmripple = RippleEffect;

})(this);
