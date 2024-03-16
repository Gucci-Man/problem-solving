// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
  
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        i++; // Found a match in str1, advance to next character
      }
      j++; // Always advance the pointer in str2
    }
  
    // If we iterated through all of str1, it's a subsequence
    return i === str1.length;
}
