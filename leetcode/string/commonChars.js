/*
https://leetcode.com/problems/find-common-characters/


*/

var commonChars1 = function(words) {
    for (let word of words){
        if (w)
        console.log()

    }
};

var commonChars2 = function(A) {
    let originalChars = A[0].split('');
    for (let i = 1; i < A.length; i++) {
        let tempChars = A[i].split('');
        originalChars = originalChars.filter(char => {
            let ind = tempChars.indexOf(char);
            return ind > -1 ? tempChars[ind] = true : false;
        });
    }
    return originalChars;
};
var commonChars = function(A) {
    let res = [...A[0]]; //store first word as an array [bella]
    
    //loop over array of words starting from 1 (becuase words[0] already stored)
    for (let i = 1; i < A.length; i++) {
        //run filter inside of the loop to go over each word 
      res = res.filter(c => {
        const l = A[i].length; //word length before replace 

        //word = word.replace (char with , empty str)
        A[i] = A[i].replace(c, "");
        console.log(A[i])
        return l > A[i].length; //word length before replace bigger than after replace
      });
    }
    console.log (res)
    return res;
  };

let w = ["bella","label","roller"] //exp [e,l,l]
console.log(commonChars2(w))