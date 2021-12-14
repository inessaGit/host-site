

var isPalindrome = function(x) {

    //int to string ; string to array of char; array reverse; array join
    let reversed=  x.toString().split("").reverse().join("");
    console.log(reversed);
    reversed=parseInt(reversed,10);
      let isPal=false;
    if (x===reversed) {
        isPal=true;
    }
      return isPal; 
  };

  isPalindrome(121);