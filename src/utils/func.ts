// debounce.js
type DebounceType = (...args: any[]) => void;
export function debounce(func: DebounceType, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(this: any, ...args: any[]) {
    const context = this; // 保存调用上下文

    // 定义延迟执行的函数，避免在每次调用时都重新创建它
    const later = function () {
      if (timeout) clearTimeout(timeout);
      try {
        func.apply(context, args);
      } catch (error) {
        console.error('Error executing debounced function:', error);
        // 可以在这里添加额外的错误处理逻辑，比如错误上报
      }
    };

    // 如果定时器已经设置，则清除之前的定时器，避免重复调用
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
