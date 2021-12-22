/*
https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/1183/
*/
//Approach 1: string to array; array reverse; array to string
var reverseString = function(s) {
    s=Array.from(s).reverse().join("");
    console.log(s);
};

//Approach 2: Using loop starting from end of the string 
var reverseString1=function(s){
  let reversed ="";
  let end = s.length-1; 
  let start =0;

  for (i=end;i>=0;i--){
    reversed+=s.charAt(i);
  }
  console.log(reversed);
  return reversed;
}
/*Approach 3: Two pointers
one starts from the first element and another starts from the last element. 
Continue swapping the elements until the two pointers meet each other.

Not sure why it is accepted on leetcode??
*/
var reverseString2=function(s){
    let start =0;
    let end =s.length-1;
    //let reversed ="";
   
     while(start<end){
       let temp =s[start];
       s[start]=s[end];
       s[end]=temp;

       start++
       end--;
     }
   
    console.log(s)
    return s;

}

reverseString2("hello");
//reverseString("12344")