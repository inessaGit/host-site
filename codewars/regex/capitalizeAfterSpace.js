
/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
let regex=/\s(.*)/g ; to find firts letter after space 
replace(regexp, replacerFunction)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

*/

function abbrevName(name){
  let first =name[0].toUpperCase();
  let regex=/\s(.*)/g;

  let last ="";
  name.replace(regex,function(match){
  last= match.charAt(1).toUpperCase(); 
     });
  console.log(`last=${last}`)
  let res=first+"."+last;
   console.log(res)
  return res;

}

function abbrevName2(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
    //alan smith 
  function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
