// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const result = {}; // Initialize an empty object
  
    // Iterate over the shorter of the two arrays 
    const minLength = Math.min(keys.length, values.length);
    for (let i = 0; i < minLength; i++) {
      result[keys[i]] = values[i];
    }
  
    // Assign null to remaining keys (if keys are longer than values)
    for (let i = minLength; i < keys.length; i++) {
      result[keys[i]] = null;
    }
  
    return result;
}
  
