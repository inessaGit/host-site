
//wrong for ccac, ccaa
var isAnagram1 = function(s, t) {
    let isAnag=false ;
    //convert to array; 
    let ar1 = s.split("").sort();
    let ar2=t.split("").sort(); 
    
    if (s.length!=t.length)return false;
isAnag= ar2.every((el)=>{return ar1.includes(el)});
    
    console.log(isAnag);
    return isAnag; 
    
};

let s="aacc"; 
let b ="ccac";
let t="car"; 
isAnagram1 (s,t);

//console.log(s.includes(b));//false it is looking for exact mathch; case sensitive; 

var isAnagram = function(s, t) {
    let a= s.split("");
    let b=t.split(""); 
    
    if(a.length!=b.length)return false;
    //sort arrays 
    a=a.sort();
    b=b.sort(); 
    
    for (let i=0;i<a.length; i++){
        if(a[i]!=b[i]) return false;
    }
    return true;
};

//isAnagram(s,b);
