/*
Seatch string for a pattern 
The main idea of the Boyer-Moore algorithm adding two potentially time-saving heuristics. 
Roughly stated, these heuristics are as follows:
- Looking-GlassHeuristic: When testing apossible placement of the pattern against the text, 
perform the comparisons against the pattern from right-to-left.
- Character-Jump Heuristic:  a mismatch of character text[i]=c with the corresponding character 
pattern[k] is handled as follows. 
--If c is not contained anywhere in the pattern, then shift the pattern completely past text[i] = c. 
-- Otherwise, shift the pattern until an occurrence of character c gets aligned with text[i].

-- when a mismatch is found near the right end of the pattern, 
we may end up realigning the pattern beyond the mismatch, 
without ever examining several characters of the text preceding the mismatch

The efficiency of the Boyer-Moore algorithm relies on quickly determining where a mismatched character occurs elsewhere in the pat- tern. In particular, we define a function last(c) as
• If c is in the pattern, last(c) is the index of the last (rightmost) occurrence of c in the pattern. Otherwise, we conventionally define last(c) = −1.


*/

function findBoyerMoore(text,pattern){
    let n = text.length;
    let m=pattern.length ; 
     if (m===0) return 0;
     //let map = new Map(text); error TypeError: Iterator value a is not an entry object
     let map = new Map();
     for (let el of text){
         map.set(el,-1);
     }
     console.log (map);//Map(3) { 'a' => -1, 'b' => -1, 'c' => -1 }

     for (let k=0;k<m;k++){
         map.set(pattern[k],k) //// rightmost occurrence in pattern is last
     }
     console.log (map);//         //Map(3) { 'a' => 4, 'b' => 5, 'c' => 3 }

     // start with the end of the pattern (aligned at index m−1)
     let i=m-1;//index into the text
     let k =m-1; //index into the pattern 

     while (i<n){

        if (text[i] == pattern[k]) {
            if (k == 0) return i; //entire pattern has been found 
            i--; //otherwise examine prev char of the text
            k--; //otherwise examine prev char of the pattern 

        }
        else {
            i += m - Math.min(k, 1 + last.get(text[i]));//case analysis for jump step 
            k=m-1; //restart at end of pattern 
        }
     }

     return -1; //pattern not found 
   }

let s = "abacaabaccabacabaabb"; //length 20 
let x='abacab'; //length 6 
//console.log (`s.length=${s.length} x.lenght=${x.length}`)

   console.log("Boyer Moore")
   console.log (findBoyerMoore(s,x));

