function calculateAnagrams(word) {
	console.log("calculateAnagrams");
// code to calculate anagrams of the word
var anagrams = [];
// base case
if (word.length === 1) {
anagrams.push(word);
return anagrams;
}
  // Recursive case: calculate the anagrams of the word by generating
  // all the possible permutations of the characters in the word and
  // checking which ones are valid English words
for (var i = 0; i < word.length; i++) {
var letter = word[i];
var remainingLetters = word.substring(0, i) + word.substring(i + 1);
var subAnagrams = calculateAnagrams(remainingLetters);
subAnagrams.forEach(function(subAnagram) {
anagrams.push(letter + subAnagram);
});
}
return anagrams;
}
