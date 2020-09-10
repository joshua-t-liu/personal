const computeClassNames = function(mapping = {}) {
  return Object.entries(mapping).filter(([className, valid]) => valid).map(([className, valid]) => className).join(' ');
};

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_HEIGHT = '414px';

export {
  computeClassNames,
  SMALL_WIDTH,
  MEDIUM_WIDTH,
  SMALL_HEIGHT,
}