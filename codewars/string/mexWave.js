/*
https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/solutions/javascript
Approach: 
- create empty res array 
- loop over str characters
- for each loop iteration create new array of chars = str.split('');
- then check if arr[i]!=" " 
- then arr[i]=arr[i].toUpperCase()
- then push to res array string (arr.join(''))
- return res;
*/
function wave(str){
  //handle white space ; handle replacing the same char e.g heLLo 
  if (!str) return [];
  let res =[]; 
  
  for (let i =0;i<str.length;i++){
    let arr = str.split('');
    if(arr[i]!=" "){
      arr=arr[i].toUpperCase();
      res.push(arr.join(''))
    }
    
    }
   return res;
}

function wave1(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}

function wave2(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}

function wave3(s){
  let w=[]
  for(let i=0;i<s.length;i++){
    w.push(s.substring(0,i)+s.charAt(i).toUpperCase()+s.slice(i+1))

  }
  return w.filter(x=>x!=s);
}
