// add whatever parameters you deem necessary
function pivotIndex(nums) {
    if (nums.length === 0) return -1; // Empty array has no pivot
  
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Early exit if right sum can't possibly be equal (avoid unnecessary calculations)
      if (totalSum - leftSum - nums[i] < 0) {
        return -1;
      }
  
      if (leftSum === totalSum - leftSum - nums[i]) {
        return i; // Pivot found
      }
  
      leftSum += nums[i];
    }
  
    return -1; // No pivot found
}
  
