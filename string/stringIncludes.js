let s="ab"
console.log(s.includes("ba")); //false
console.log(s.match(/ba/));//null

var countConsistentStrings = function(allowed, words) {
    let counter=words.length;

    for (let word of words){
        for(let i=0;i<word.length;i++){
            if(!allowed.includes(word[i])){
                counter--;
                break
            }
        }
    }
    return counter;
};

let allowed ="ab"
let words=["ad","bd","aaab","baa","badab"];
console.log(countConsistentStrings(allowed,words));