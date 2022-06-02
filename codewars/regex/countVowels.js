var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[AEIOUYaeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);