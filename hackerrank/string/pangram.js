/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen

Important:
- make lower case to avoid dups in set
- remove white spaces
*/

function pangrams(s) {
    // Write your code here
 let ans= "";
  let str = s.toLowerCase().split("").filter((el)=>{
      return el!=" ";
  });
  let set = new Set (str);
  set.size<26? (ans='not pangram'):ans='pangram'
  return ans; 
}

function pangrams1(s) {
    // replace(/ /g, "") is the same as replaceAll(" ","")
    let ans ="pangram"
    let str =s.toLowerCase().replace(/ /g, "");
    let set = new Set(str);
     console.log(set) ;
    return set.size==26 ? ans : "not "+ans;

}
let s="qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun";
console.log(pangrams1(s));