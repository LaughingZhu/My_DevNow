// debounce.js
type DebounceType = (...args: any[]) => void;
export function debounce(func: DebounceType, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // 定义延迟执行的函数，避免在每次调用时都重新创建它
  const later = function (this: any, args: any[]) {
    if (timeout) clearTimeout(timeout);
    try {
      func.apply(this, args);
    } catch (error) {
      console.error('Error executing debounced function:', error);
      // 可以在这里添加额外的错误处理逻辑，比如错误上报
    }
  };

  return function executedFunction(this: any, ...args: any[]) {
    const context = this; // 保存调用上下文

    // 如果定时器已经设置，则清除之前的定时器，避免重复调用
    if (timeout) clearTimeout(timeout);

    // 设置新的定时器，延迟执行函数
    timeout = setTimeout(() => later.apply(context, args), wait);
  };
}
