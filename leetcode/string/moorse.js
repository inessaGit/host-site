/*
https://leetcode.com/problems/unique-morse-code-words/
*/

const alphabet = {
    a: '.-', b: '-...',   c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..',  j: '.---',  k: '-.-',  l: '.-..', m: '--',
    n: '-.',  o: '---', p: '.--.',  q: '--.-',  r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',  y: '-.--', z: '--..' 
}
const uniqueMorseRepresentations1 = words => {  
	// PREVIOUS SOLUTION:
	// return [...new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join('')))].length
   
    return new Set(words.map(word => word.split('').map(letter => alphabet[letter]).join(''))).size
}

var uniqueMorseRepresentations = function(words) {
    let morse =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let str='abcdefghijklmnopqrstuvwxyz';
    let map =new Map();
    let i=0;
    while(i<26){
         map.set(str[i],morse[i]);
                i++;
     }
      let transform =function(str){
        let m_str="";
        for(let ch of str){
            m_str+=map.get(ch)
        }
        return m_str;
    }
    // console.log(map);
    let transformed=[];
    for (let word of words){
        let tr_word=transform(word);
        transformed.push(tr_word)
    }
    
    let set = new Set(transformed);
    return set.size;
 
  
};

let w="akka"
console.log(w.substring(0,2))