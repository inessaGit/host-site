/*
https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
*/

var freqAlphabets = function(s) {
    let alphabet='abcdefghijklmnopqrstuvwxyz';
    let map = new Map();
    for (let j=0,i=1;i<=alphabet.length;i++){
        if(i>=10 && i<=26){
            map.set(alphabet[j++],i+'#');
     }
        else{
        map.set(alphabet[j++],i);
        }
    }
    //console.log(map)
    // return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
   for (let i=0;i<s.length;i++){
      s.replaceAll()
   }
    
};

let s="910#11#12"; //exp jkab

console.log(s.split('#')); //[ '910', '11', '12' ]
console.log(s.split(/\d/g));  //'', '',  '', '#','', '#', '', ''
console.log(s.replaceAll('10#','k'))
freqAlphabets(s);
