// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // Convert numbers to strings for easier digit manipulation
    const str1 = num1.toString();
    const str2 = num2.toString();
  
    // Handle different lengths immediately
    if (str1.length !== str2.length) {
      return false; 
    }
  
    const digitCounts = {}; 
  
    // Count frequencies of digits in the first number
    for (const digit of str1) {
      digitCounts[digit] = (digitCounts[digit] || 0) + 1;
    }
  
    // Decrement counts for digits in the second number
    for (const digit of str2) {
      if (!digitCounts[digit]) { 
        return false; // Digit not found 
      }
      digitCounts[digit]--; // Decrement count
    }
  
    return true; // All frequencies matched
}
  
