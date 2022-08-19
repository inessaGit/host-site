/*
https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
Implement a pseudo-encryption algorithm which given a string S and an integer N 
concatenates all the odd-indexed characters of S with all the even-indexed characters of S,
 this process should be repeated N times.

Encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314":

Together with the encryption function, you should also implement a decryption function 
which reverses the process.
If the string S is an empty value or the integer N is not positive, 
return the first argument without changes.

 Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });

  Decript: 
  - can have two cases : 
  A. when length even e.g 4 => even, odd, even ,odd 
  B. when length odd e.g 3 =>  even, odd, even -[last odd undefined]
*/

function calcEncrypt(str){
    let even ="";
    let odd ="";
    str.split('').forEach((el,i)=>{
    i%2==0 ?  even+=el : odd+=el;
    })
    return odd+even;
}
function encrypt(text, n) {
    //get all odd , get all even , concat return as string
     if(!text || n<=0) return text;
     let res = calcEncrypt(text); //1st transformation 
     n--;
     while(n>0){
         res= calcEncrypt(res)
         n--;
         console.log(`encrypt function res=${res} n=${n}`);
     }
     return res;
   }
   
   function calcDecript(str){
      //store even in str, store odd in str, loop over str.length/2 store res+=even[i] +odd[i]
      let len = str.length; 
      let odd = str.slice(0,len/2);
      let even = str.slice(len/2);
      //console.log(`len=${len} even=${even.length} odd=${odd.length}`)
      let res = ""
      for(let i =0;i<len/2;i++){
         res+=even[i]+odd[i];
        // console.log(`res=${res} i=${i}`);
      }
      if (len%2!=0) res=res.replace('undefined',"");
      return res;
    }
   function decrypt(encryptedText, n) {
     if(n<0) return encryptedText;
    let res =calcDecript(encryptedText); //1st decript
    n--; 
    while(n>0){
        res=calcDecript(res); 
        n--;
       // console.log(`decript function res=${res} n=${n}`);
    }
   // console.log(res);
    return res; 

   }

   let t = "012345";//135024
   //encrypt(t,1)
   //encrypt("This is a test!", 0);
   //encrypt("This is a test!", 1) //exp "hsi  etTi sats!"
   //encrypt("This is a test!", 2) ; //exp "s eT ashi tist!"
  // encrypt("01234", 3)  //  "13024"  ->  "32104"  ->  "20314":

  //decrypt("hsi  etTi sats!", 1)// exp: "This is a test!"
  //decrypt("This is a test!", -1)//  "This is a test!"
  decrypt("s eT ashi tist!", 2)//  "This is a test!"
  //decrypt("This is a test!", 4)// "This is a test!")