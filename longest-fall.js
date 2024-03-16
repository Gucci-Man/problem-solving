// add whatever parameters you deem necessary
function longestFall(nums) {
    let longestFall = 0; 
    let currentFall = 1;  
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        currentFall++;
        longestFall = Math.max(longestFall, currentFall);
      } else {
        currentFall = 1; // Reset for a new decreasing sequence
      }
    }
  
    return longestFall;
}
  
