/*
https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

* 0 or more of the preceding expression
+ 1 or more of the preceding expression
==============
.* means zero or more of any chars 
.+ means one or more of any chars 

test case => TestCase
*/

String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }

 String.prototype.camelCase3=function(){
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
  }
String.prototype.camelCase2=function(){
    //Approach: 1. split string into array; modify array 1st letter to upper and letter after space ; filter out space and join
    let arr = this.trim().split('');
    for(let i=0;i<arr.length;i++){
      arr[0]=arr[0].toUpperCase(); //capitalize 1st letter
      if(arr[i]==" ") arr[i+1]=arr[i+1].toUpperCase();//capitalize after space
      console.log(arr.join(''))
    }
             return arr.filter((el)=>el!=" ").join('') ;          
  }
  
  
  /*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  let last ="";
    name.replace(regex,function(match){
    last= match.charAt(1).toUpperCase(); 
       });
  
  */