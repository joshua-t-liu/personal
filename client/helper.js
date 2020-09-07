const computeClassNames = function(mapping = {}) {
  return Object.entries(mapping).filter(([className, valid]) => valid).map(([className, valid]) => className).join(' ');
};

export {
  computeClassNames,
}