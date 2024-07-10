// debounce.js
export function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      clearTimeout(timeout);
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
