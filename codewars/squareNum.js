const e = require("express");

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
   let res =[];
    while (num>0){
        let ld = num%10;
        res.unshift(ld*ld);
        num=Math.floor(num/10); //drop last digit and round
    }
    console.log(`res before reverse ${res}`);
    let ans ="";
    for (let el of res){
        ans+=el;
    }
   // res = res.split('').reverse().join('');
    return Number(ans);
  }

  function squareDigits1(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

  function squareDigits2(num){
    var array = num.toString().split('').map( function(int) {
      var i = parseInt(int);
      return i * i;
    });
    
    return parseInt(array.join(""));
  }

  function squareDigits3(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

let s =3212;
let s2=2098473;
console.log(squareDigits(s2));
//squareDigits(2098473) should equal 40816416499
// assert.strictEqual(squareDigits(2112), 4114);