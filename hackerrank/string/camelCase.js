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
<<<<<<< HEAD
    console.log(res)
    } 

    
function processData() {
    //The replace() method returns a new string with all matches of a pattern replaced by a replacement
    let arr =['iPad\r', 'HonestReview\r', 'Camel case\r', 'four'];
    arr.forEach((el,index)=> arr[index]=arr[index].replace('\r',''));
    console.log(arr);

 const originalArr = ["Iron", "Super", "Ant", "Aqua"];
originalArr.forEach((name, index) => originalArr[index] = `${name}man`);
console.log( "Overridden: %s", originalArr );

 for (let el of arr){
    let found = el.match(/[A-Z]/g);
  //  console.log(found); 

  // skip first letter 
    el = el.replace(el[0], el[0].toLowerCase());
    let found2= el.search(/[A-Z]/g);
    //console.log(found2);//index of the FIRST found capital letter or -1 if not found
    
     let res = el.split(/(?=[A-Z])/g);//iPad became i,ad so need to add to positive lookahead to regex ?=
     console.log(`res=${res}`)

    }


const str = 'One Two Three';
const result = str.split(/(?=[A-Z])/);
console.log(result);

 }


processData();
let m ="plasticCup()";
let array = m.split(/(?=[A-Z])/);
array = array.join(' ');
console.log(array);
=======
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
>>>>>>> 42185f19d92f12b71731a7f899e0efb0f57ec3a4
