// lib/cn.js
export function cn(...args) {
  return args.flat(Infinity).filter(Boolean).join(" ");
}
