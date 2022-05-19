
//The + in front, converts the string result of "toFixed" to a number again.

multiply = function(a, b) {
    let res= +(a*b).toFixed(4)
    console.log(res);
    return res;
  }

  multiply(3, 0.0001)	//exp 0.0003
  multiply(3, 0.2)	//exp 0.6