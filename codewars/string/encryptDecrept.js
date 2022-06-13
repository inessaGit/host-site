/*
https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

*/

function encrypt(text, n) {
    //get all odd , get all even , concat return as string
     if(!text || n<0) return text;
     let even ="";
     let odd ="";
     text.split('').forEach((el,i)=>{
     i%2==0 ?  even+=el : odd+=el;
     })
     console.log(odd+even)
   }
   
   function decrypt(encryptedText, n) {
   
   }

   let t = "012345";
   encrypt(t,1)