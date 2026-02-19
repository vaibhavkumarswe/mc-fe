const throttle = (fx, delay) => {
  let throttled = false;
  let lastArgs = null;
  let lastThis = null;

  return function (...args) {
    lastArgs = args;
    lastThis = this;

    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        fx.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
        throttled = false;
      }, delay);
    }
  };
};
