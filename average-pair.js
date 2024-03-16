// add whatever parameters you deem necessary
function averagePair(arr, targetAverage) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const currentAverage = (arr[left] + arr[right]) / 2;
  
      if (currentAverage === targetAverage) {
        return true;
      } else if (currentAverage < targetAverage) {
        left++; // Need a larger average, move left pointer
      } else {
        right--; // Need a smaller average, move right pointer
      }
    }
  
    return false; // No pair found
}

module.exports = { averagePair }
  