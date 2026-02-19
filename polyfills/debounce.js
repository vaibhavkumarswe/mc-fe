const debounce = function (fx, delay) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fx(...args);
      timeoutId = null;
    }, delay);
  };
};
