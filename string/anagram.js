
var isAnagram = function(s, t) {
    let isAnag=false ;
    //convert to array; 
    let ar1 = s.split("");
    let ar2=s.split(""); 
    
    if (ar1.length===ar2.length){
      isAnag=  ar2.every(function(element){
         ar1.includes(element)
        });
    }
    console.log(isAnag);
    return isAnag; 
    
};

let s="rat"; 
let b ="tar";
let t="car"; 
isAnagram (s,b);

//console.log(s.includes(b));//false it is looking for exact mathch; case sensitive; 
