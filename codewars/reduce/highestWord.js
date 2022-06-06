/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript


*/


function high(x){
    let alphabet ="0abcdefghijklmnopqrstuvwxyz";
    let arr = x.split(' ');
    let max = -1; 
    let res=arr.map((el)=>{
       let total =0;
       for (let ch of el){
          total += alphabet.indexOf(ch);
       }
       max=Math.max(total,max);
       return total;
     });
   console.log(res); //get index of the highest num 
   let index= res.indexOf(max);
   return arr[index]
 }

function high2(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }

  function high1(words) {
    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);
  
    return words
      .split(' ')
      .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
      .sort((a, b) => a.score - b.score || b.pos - a.pos)
      .pop()
      .word;
      
  }  