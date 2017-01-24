// @flow

export default (theme: {[string]: string}, mod: Array<string> | string) => (
  Array.isArray(mod) ? mod.map(m => theme[m])
    : mod ? theme[mod]
    : undefined
);
