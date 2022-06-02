/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

a(b|c)     matches a string that has a followed by b or c (and captures b or c) -> Try it!
a[bc]      same as previous, but without capturing b or c
Regex quantifier 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

(x) means: 
Capturing group: Matches x and remembers the match. 
For example, /(foo)/ matches and remembers "foo" in "foo bar".

\n means : 
Where "n" is a positive integer. 
A back reference to the last substring matching the n parenthetical 
in the regular expression (counting left parentheses). 
For example, /apple(,)\sorange\1/ matches "apple, orange," in "apple, orange, cherry, peach".
*/

function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }

  function isPangram1(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }