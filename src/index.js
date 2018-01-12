module.exports = function getJsonLevel (obj) {
  let maxLevel = 1;
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
      const depth = getJsonLevel(obj[key]) + 1;
      maxLevel = Math.max(depth, maxLevel);
    }
  }
  
  return maxLevel;
}
