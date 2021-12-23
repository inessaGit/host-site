let s ="hello";
s[1]="20";
console.log(s) //hello 

s=s[1]+s;  
console.log(s) //ehello

let m="255.100.50.0"
let regexp=/\./g;
console.log(m.replace(regexp,"[.]"))