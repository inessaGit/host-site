/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
*/

function createPhoneNumber(numbers){
    let s = numbers.join('');
    
    console.log(s);
    let first =s.slice(0,3);
    let second =s.slice(3,6);
    let third =s.slice(6,s.length);
   s =`(${first}) ${second}-${third}`;
   console.log(s);
    return s;
}

function createPhoneNumber1(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
