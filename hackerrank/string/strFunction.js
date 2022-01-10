/*

https://app.codesignal.com/interview-practice/task/C8Jdyk3ybixqQdAvM/description
Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.

1.solve with built in functions String.search(regex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
Return value: The index of the first match between the regular expression and the given string, or -1 if no match was found.

2. Should implement using KMP algorithm

Brute force
/∗∗ Returns the lowest index at which substring pattern begins in text (or else −1).∗/ public static int findBrute(char[ ] text, char[ ] pattern) {
int n = text.length;
int m = pattern.length;
for (int i=0; i <= n − m; i++) {
int k = 0;
while (k < m && text[i+k] == pattern[k])
k++;
if (k == m)
if (k == m)
return i;
// try every starting index within text // k is index into pattern
// kth character of pattern matches
// if we reach the end of the pattern, // substring text[i..i+m-1] is a match
}
}C
*/


let s1="CodefightsIsAwesome";
let p1='IsA' //10 
let x1='IA' //-1 

let s = "abacaabaccabacabaabb"; //length 20 
let x='abacab'; //length 6 
console.log (`s.length=${s.length} x.lenght=${x.length}`)

function bruteForce(s,x){
let n=s.length;// str length 
let m=x.length ; // pattern length 

//assuming that s longer than x ; 
//3 the worst-case running time of the brute-force method is O(nm).
// i<20-6 = 14 
for (let i=0;i<=n-m;i++){
    let k=0;//counter 

    //k < pattern length=> go over each char of the pattern
    // and str [i+k]===pattern[k] and compare it to the potential corresponding char from string 
    while (k<m &&s[i+k]===x[k]){
        k++;
        if (k===m) return i; //if counter equals pattern length return i
    }
}
return -1; 
}
console.log("Brute force")
console.log(bruteForce(s,x));



function solution1(s, x) {
    let res =s.search(x)
    return res;
}
function solution(s, x) {
   if (x===null || x===undefined) return -1;
   let chars= s.split('');
   for (let el of chars){

   }
}


//console.log(solution(s,x));

