
let s = "abc";
let t = "aaa";
//Map("a" => "a", "b" => "a", "c" => "a")

let map= new Map();
let n = s.length; 

for (let i =0;i<n;i++){
    if (!map.has(s[i])){
    map.set(s[i],t[i]);
      console.log(map);
    }
    
}