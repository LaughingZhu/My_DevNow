// debounce.js
type DebounceType = (...args: any[]) => void;
export function debounce(func: DebounceType, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      if (timeout) clearTimeout(timeout);
      func.apply(context, args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
