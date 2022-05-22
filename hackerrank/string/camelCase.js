/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?isFullScreen=true
let found = string.search(regex); 
search() returns The index of the first match between the regular expression and the given string, 
or -1 if no match was found.

To replace \r and \n 
replace(/[\r]/g, "")
===V1 passed the tests and accepted ; do I need a map? 
TODO: clean up code
*/

function capitalizeAfterSpace(s){
    s = s.trim().split(''); 
    for (let i=0;i<s.length;i++){
        if(s[i]==" "){
            s[i+1]=s[i+1].toUpperCase(); //replace with uppercase
            s[i]="";//remove space
        }
    }
    s= s.join('');//array to string
    //console.log(s); 
    return s; 
   }
   
   function processData(input) {
      let words =input.replace(/[\r]/g, "").split('\n');
     // console.log(`words=${words}`); 
      let map = new Map();
      let key="";
      let val ="";
      for (let el of words){
          key =el.slice(4);
          val = el.slice(0,4);
          map.set(key,val);
      }
     // console.log(map)
      let res =[];
      for (let [k,v]of map){
          if(v.startsWith('S')){
   //split into space delimeted list of words with lower case
   k =k.replace("()","").split(/(?=[A-Z])/); //array of words split by capital letters 
        let transformed=""; 
       for (let el of k){
            transformed+=el.toLowerCase()+" ";
              }
              res.push(transformed.trim());
             // console.log(`Starts with S res=${res}`)
          }
          else if(v.startsWith('C')){
              //check if includes M
              if(v.includes('M')){
                  k=k+"()";
   //capitalize letters after empty space after first word mousepad()
                 k=capitalizeAfterSpace(k);
                  res.push(k);
              }
              //check if includes C
              else if (v[2]==('C')){
                  k=k.replace(k[0],k[0].toUpperCase());
                  //capitalize letters after first word
                   k=capitalizeAfterSpace(k);
                  res.push(k);
              }
           // console.log(`Starts with C res=${res}`)
           else {
            k=capitalizeAfterSpace(k);
            res.push(k);
           }
   
          }
      }
      console.log(res.join('\n'));
      return res.join('\n');
   } 
   
   let input ="C;V;can of coke\nS;M;sweatTea()\nS;V;epsonPrinter\nC;M;santa claus\nC;C;mirror"
   processData(input) ;
   /*
   Expected: 
canOfCoke
sweat tea
epson printer
santaClaus()
Mirror
   */