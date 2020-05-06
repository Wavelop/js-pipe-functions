const _reduced = (f, g) => (...args) => g(f(...args));
const pipe = (...fns) => fns.reduce(_reduced);

const voidPipe = (...fns) => (...args) => fns.reduce((res, func) => func(...args), ...args);

module.exports = {
  pipe,
  voidPipe,
};