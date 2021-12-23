var isPalindrome = function(x) {
    let reversed=  x.toString().split("").reverse().join("");
      reversed=parseInt(reversed,10);
      let isPal=false;
    if (x===reversed){
        isPal=true;
    }
      return isPal; 
  };

