/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Move the first letter of each word to the end of it,
 then add "ay" to the end of the word. Leave punctuation marks untouched.

 Greedy quantifier: 
  + means Match one or more times.
  String.replace()
  replace(regexp, replacerFunction)

*/

function pigIt(str){
    //Code here
    let AY ='ay'; 
    let res =str.split(' ').map((el)=>{
      let first =el[0];
      let regex = /[a-zA-Z]/g;
      return  regex.test(el) ? el.replace(first,'')+first+AY: el
    }).join(' ');
    console.log(res)
    return res;
  }


  function pigIt1(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

  function pigIt2(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

