function getAnagrams(word) {
  // base case: if the word is empty, there are no anagrams
  if (word.length === 0) {
    return [];
  }

  // recursive case: if the word has at least one character,
  // find all of the anagrams of the word without the first character
  // and add the first character to each of those anagrams
  let anagrams = getAnagrams(word.slice(1));
  let firstChar = word[0];
  let newAnagrams = [];

  // loop through each of the existing anagrams
  for (let i = 0; i < anagrams.length; i++) {
    // insert the first character into every possible position in the anagram
    for (let j = 0; j <= anagrams[i].length; j++) {
      newAnagrams.push(
        anagrams[i].slice(0, j) + firstChar + anagrams[i].slice(j)
      );
    }
  }

  // if there were no existing anagrams, the only anagram is the word itself
  if (anagrams.length === 0) {
    newAnagrams.push(firstChar);
  }

  return newAnagrams;
}

// test the function
console.log(getAnagrams("cat"));  // should print ["cat", "cta", "act", "atc", "tca", "tac"]
