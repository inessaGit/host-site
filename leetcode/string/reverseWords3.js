/*
https://leetcode.com/problems/reverse-words-in-a-string-iii/

*/

var reverseWords = function(s) {
    let words =s.split(" ")
    //console.log(words)

    let reverse=words.map((word)=>{
        word =word.split('').reverse().join('');
        return word;
    })
  // console.log (reverse); //array 
   let ans = reverse.join(' ');
   console.log(ans);

  return reverse; 
};
var reverseWords3 = function(s) {
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
};

var reverseWords2 = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    console.log (res + word);
    return res + word;
};

let s = "Let's take LeetCode contest"; //exp s'teL ekat edoCteeL tsetnoc"
let m ="God Ding" //exp "doG gniD"
reverseWords2(s)