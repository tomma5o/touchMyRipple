// Default Settings
const settings = {
    area: "",
    color: "rgba(255, 255, 255, 0.4)",
    offsetEl: null,
    eventListener: "click",
    mouseMove: false
};

/**
 * @description Where the magic happens
 * @param {object} e
 * @param {string} rippleColor
 * @param {string} eventListener
 */
function ripple(e, rippleColor, eventListener) {
    const clickedEl = e.currentTarget;
    const PageX = eventListener.match(/touch/)
        ? e.changedTouches[0].pageX
        : e.clientX;
    const PageY = eventListener.match(/touch/)
        ? e.changedTouches[0].pageY
        : e.clientY;
    const btnWidth = clickedEl.clientWidth;
    const el = clickedEl.getBoundingClientRect();
    const rippleOffset = settings.offsetEl ? settings.offsetEl.clientHeight : 0;
    const btnOffsetTop = el.top + rippleOffset;
    const btnOffsetLeft = el.left;
    const posMouseX = PageX;
    const posMouseY = PageY + rippleOffset;
    const rippleX = posMouseX - btnOffsetLeft;
    const rippleY = posMouseY - btnOffsetTop;

    const baseCSS = `
          position: absolute;
          width: ${btnWidth * 2}px;
          height: ${btnWidth * 2}px;
          border-radius: 50%;
          transition: transform 700ms, opacity 700ms;
          transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);
          background: ${rippleColor};
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
          left: ${rippleX - btnWidth}px;
          top: ${rippleY - btnWidth}px;
          transform: scale(0);
          pointer-events: none;
      `;

    // Prepare the dom
    const rippleEffect = document.createElement("span");
    rippleEffect.style.cssText = baseCSS;

    // Add some css for prevent overflow errors
    clickedEl.style.overflow = "hidden";

    // Check if the element is not static because the ripple is in absolute
    if (window.getComputedStyle(clickedEl).position === "static") {
        clickedEl.style.position = "relative";
    }

    // Check for the mousemove event
    if (settings.mouseMove) {
        settings.mouseMove = false;
        return;
    }

    clickedEl.appendChild(rippleEffect);

    // start animation
    setTimeout(() => {
        rippleEffect.style.cssText = `${baseCSS} transform: scale(1); opacity: 0;`;
    }, 50);

    setTimeout(() => {
        rippleEffect.remove();
    }, 700);
}

/**
 * @description Prevent ripple when scrolling (Mobile Only)
 * @param {string} eventListener
 */
function onDrag(eventListener) {
    if (eventListener === "touchend") {
        document
            .getElementsByTagName("body")[0]
            .addEventListener("touchmove", () => {
                settings.mouseMove = true;
            });
    }
}

function attachRipple(els, rippleColor, eventListener) {
    for (let i = 0; i < els.length; i += 1) {
        const currentBtn = els[i];
        currentBtn.addEventListener(eventListener, e =>
            ripple(e, rippleColor, eventListener)
        );
    }
}

function attachRippleToAttribute(area, rippleColor, eventListener) {
    const attributeEl = document.querySelectorAll(
        `${area} [data-animation='ripple']`
    );

    if (attributeEl.length > 0) {
        attachRipple(attributeEl, rippleColor, eventListener);
    } else {
        throw new Error('not found any element with data-animation="ripple"');
    }
}

function attachRippleToSelectors(selectors, rippleColor, eventListener) {
    if (selectors) {
        var selectorsEl = document.querySelectorAll(selectors);
    } else {
        throw new Error("You have to enter at least 1 selector");
    }

    if (selectorsEl.length > 0) {
        attachRipple(selectorsEl, rippleColor, eventListener);
    } else {
        console.warn("No element found with this selector: ", selectors);
    }
}

module.exports = {
    init(data = {}) {
        try {
            let { area, color, offsetEl, eventListener } = settings;

            area = data.area || area;
            color = data.color || color;
            offsetEl = data.offsetEl ? this.setOffsetEl(data.offsetEl) : offsetEl;
            eventListener = data.eventListener || eventListener;

            onDrag(eventListener);
            attachRippleToAttribute(area, color, eventListener);
        } catch (e) {
            console.warn(e.message);
        }
    },

    attachToSelectors(data = {}) {
        try {
            const elSetting = {
                color: data.color || settings.color,
                eventListener: data.eventListener || settings.eventListener
            };
            const { color, eventListener } = elSetting;

            attachRippleToSelectors(data.selectors, color, eventListener);
        } catch (e) {
            console.warn(e.message);
        }
    },

    setOffsetEl(el) {
        settings.offsetEl = document.querySelector(el);
    },
    ripple
};
