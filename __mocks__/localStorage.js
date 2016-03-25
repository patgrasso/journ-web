/**
 * Mock localStorage
 */

let g     = window || global;
let store = {};

g.localStorage = {
  getItem: (key) => store[key] || null,
  setItem: (key, value) => store[key] = value
};

export default g;
