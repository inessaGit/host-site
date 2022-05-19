/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case/problem?isFullScreen=true

Sample Input

S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

let found = string.search(regex); 
search() returns The index of the first match between the regular expression and the given string, 
or -1 if no match was found.

===In progress ====
*/

function processData1(input) {
    //split into an array by \n
    let words = input.trim().split('\n');
    //remove \r and replace 1st letter with lowercase
    words.forEach((el,index)=>words[index]=words[index].replace('\r','').replace(words[index][4],words[index][4].toLowerCase()));
    console.log(words);
    
    //store k,v in a map
    let map = new Map();
    let key = "";
    let val = "";
    for (let el of words ){
        key = el.slice(4);
        val=el.slice(0,4);
        map.set(key,val);
    }
    console.log(map);
    
    //declare res array 
    let res =[] ; 
    //go over map if val.startsWith S then split 
    for (let [k,v] of map){
        if(v.startsWith('S')){
    //find 1st capital letter then split by it and make it lower case
    //then store processed el in the res array 
    let index = k.search(/[A-Z]/g);  //if not found -1 
    console.log(`index=${index}`);
    
    if (index>-1){
     k=k.slice(0,index) +" "+ k.slice(index).replace(k[index],k[index].toLowerCase()) ;
     console.log(`k=${k}`);
     res.push(k);
    }
        }
        else if(v.startsWith('C')){
            //ALL capitalize starting from 2nd word
            //M should end with ()
            //C should capitalize first letter 
            if(v.includes('M')){
                k=k+"()";
            }
            else if(v.includes('C')){
                k=k.replace(k[0],k[0].toUpperCase());
            }
            res.push(k);
        }
    }
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