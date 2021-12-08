let s = "abcd  "  ;
console.log(s.trim());
console.log (s.indexOf('a'));
console.log("one two three".indexOf('ee'))//search for more than 1 char
console.log(s.length); 
console.log("coconuts".slice(0,2));//co 

console.log ("cat".padEnd(20,"meow")); //takes the desired length and padding character as arguments.
console.log("cat".padStart(10,"start"));

console.log(String(6).padStart(3, "0")); //006 

let sentence = "[Done] exited with code=0 in 0.06 seconds";
let words =sentence.split(" ");
console.log(words)
console.log(words.join("."));

let la = "la";
console.log(la.repeat(4)); //lalalala
la = la.repeat(4); 
console.log(la[3]) ;//l