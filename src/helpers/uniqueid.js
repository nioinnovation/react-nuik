// @flow
let counter = 0;
export default (prefix: string = 'nuik') => {
  counter += 1;
  return `${prefix}__${counter}`;
};
