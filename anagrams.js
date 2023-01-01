function calculateAnagrams(word) {
  // Base case: if the word is empty, there are no anagrams
  if (word.length === 0) {
    return [];
  }
  
  // Recursive case: calculate the anagrams of the word by generating
  // all the possible permutations of the characters in the word and
  // checking which ones are valid English words
  const anagrams = [];
  for (let i = 0; i < word.length; i++) {
    const remainingChars = word.substring(0, i) + word.substring(i + 1);
    const subAnagrams = calculateAnagrams(remainingChars);
    for (const subAnagram of subAnagrams) {
      anagrams.push(word[i] + subAnagram);
    }
  }
  return anagrams;
}
