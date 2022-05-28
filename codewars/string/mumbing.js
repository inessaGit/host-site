/*

*/

function accum(s) {
    return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
  }


  function accum1(s) {
    let n=s.length; 
    let res = '';
    for (let i =0;i<n;i++){
    
      res+=s[i].toUpperCase()+s[i].toLowerCase().repeat(i)+"-";
    }
    res=(res.slice(0,res.length-1))//to get rid of last dash 
    return res; 
  }

  let s='ZpglnRxqenU';
  let exp='Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu';
  accum1(s);
  accum(s);