

function testMatchAll(s){
    let matches = s.matchAll('SOS');  
    // console.log(`matches= ${matches}`) matches= [object RegExp String Iterator]
     for (const match of matches) {
         console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
         console.log(`match.input=${match.input}`) //SOSSOTSOS
       }

       let res = s.match(/[^SOS]/g); //returns null if no matches found 
       if (res==null){
           console.log(`res=null so returning s.length `+s.length)
           return s.length ;
       }
      console.log(`res=${res} and res.length=${res.length}`);
 
}

let s ="SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO" ; //exp 26
let s1= 'SOSSOTSOS';  
let s2="SOSSPSSQSSOR" ;