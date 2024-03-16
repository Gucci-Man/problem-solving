// add whatever parameters you deem necessary
function countPairs(nums, targetSum) {
    const seen = {}; // Use an object as the hash table equivalent
    let count = 0;
  
    for (const num of nums) {
      const complement = targetSum - num;
      if (complement in seen) {
        count += seen[complement]; 
      }
  
      seen[num] = (seen[num] || 0) + 1; 
    }
  
    return count;
}
  
