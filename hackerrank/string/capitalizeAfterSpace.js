

function capitalizeAfterSpace(s){
 s = s.trim().split(''); 

 for (let i=0;i<s.length;i++){
     if(s[i]==" "){
         s[i+1]=s[i+1].toUpperCase(); 
        
     }
 }
 s= s.join('').replaceAll(' ',"");
 console.log(s); 
 return s; 
}

let arr =["i pad", 'mousepad()', "orange highlighter"];
console.log(arr.join('\n'));

let s = "Hello hello hello  hello ";
capitalizeAfterSpace(s);