/*
https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript
*/


function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

  const XO1 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

  function XO2(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//mine:(
    function XO3(str) {
        //can have any char; when no x o present return true;
      let countX=0;
      let countO=0;
      let s=str.toLowerCase();
      
      for(let el of s)
        {
          el=='x'? countX++ : el=='o'? countO++:countO;
        }
      if(countX==0 && countO==0) return true;
      if(countX==countO) return true; 
      
      return false;
      
    }

    let t ="hello"
    let res =t.match(/he/gi);
    console.log(res)// ['he'] //match returns an array or null 