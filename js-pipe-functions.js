const _reduced = (f, g) => (arg) => g(f(arg));
const pipe = (...fns) => fns.reduce(_reduced);

const validationPipe = (...fns) => (...args) => fns.reduce((res, func) => func(...args), ...args);

module.exports = {
  pipe,
  validationPipe,
};