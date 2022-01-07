/*
substring() extracts characters from indexStart up to but not including indexEnd. In particular:
 - slice(beginIndex)
slice(beginIndex, endIndex) extracts a section of a string and returns it as a new string, 
without modifying the original string.


Given a string (e.g "this is first sentence. this is second. And this is third"). Write a method that will return me array of hashmaps such that each hashmap in array will be 1 sentence and every hashMap will contain (word number, word) of that sentence.

Write a program to print following pattern
        1    
	  1 2 1
    1 2 3 2 1 
  1 2 3 4 3 2 1
*/


let s="hello";
s=s.substring(0,3)
console.log(s) //hel

let m="world";
m=m.split("");
m.splice(2,2)//remove at index 2 one elm
console.log(m) //[ 'w', 'o', 'd' ]
