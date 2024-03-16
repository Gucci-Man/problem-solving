// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    // Check for all positive or negative elements early
    let allPositive = true;
    let allNegative = true;
    for (const num of arr) { // Use 'const' for cleaner code
      if (num <= 0) allPositive = false;
      if (num > 0) allNegative = false;
  
      // Exit early if both flags are false
      if (!allPositive && !allNegative) break;  
    }
  
    // If already sorted (all positive or all negative), return
    if (allPositive || allNegative) return arr; 
  
    // Main separation logic
    while (left < right) {
      if (arr[left] > 0) {
        left++;
      } else if (arr[right] <= 0) {
        right--; 
      } else {
        [arr[left], arr[right]] = [arr[right], arr[left]]; 
        left++;
        right--;
      }
    }
}
  
  
