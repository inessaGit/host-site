/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript

RegExp: 
- dot meaning depends on if it is used /./g or with /[.]/
Matches any single character except line terminators: \n, \r, \u2028 or \u2029. 
For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".
Inside a character class, the dot loses its special meaning and matches a literal dot.
*/

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand1(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand2 = dna => dna.replace(/./g, c => pairs[c]);
  

function DNAStrand3(dna){
    //swap A with T , swap G with C, swap T with A, swap C with G
    let n = dna.length;
    let res ='';
    let arr=dna.split('');
    for (let i=0;i<n;i++){
      if(arr[i]=='A') arr[i]='T';
      else if(arr[i]=='G')arr[i]='C';
      else if (arr[i]=='C')arr[i]='G'
      else if (arr[i]=='T')arr[i]='A';
    }
    console.log(arr.join(''))
     return arr.join('')
  }