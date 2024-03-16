// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCounts = {};
  
    // Count the frequency of letters from 'letters' 
    for (const letter of letters) {
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
  
    // Check if each letter in the 'message' exists in our count
    for (const letter of message) {
      if (!letterCounts[letter]) {
        return false; // A necessary letter is missing
      }
      letterCounts[letter]--; // Decrement the count; we used this letter
    }
  
    return true; // We were able to construct the message
}

module.exports = { constructNote }