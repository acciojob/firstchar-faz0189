function firstChar(str) {
  for (let char of str) {
    if (char !== ' ') {
      return char; // Return the first non-space character
    }
  }
  return ''; // Return an empty string if no non-space character is found
}


