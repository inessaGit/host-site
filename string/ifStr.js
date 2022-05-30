

let str='';
let str2="hello";
let n =5; 

if (str) n+=1; //false 
if(str2) n+=1 //6
if(!str) n=0 //0
console.log(n) //0

//basically checks if title evaluates to false. If it does, it "returns" "Error", otherwise it returns title.
function test(title, msg) {
if (!title) {
    title = "Error";
  }
  console.log(title)
}
function test1(title,msg){
     title = title || "Error";
     console.log(title)

}
test(''); //Error 
test('test')//test
test1(''); //error 
test1(null); //error 
test1(1);//1 
test1(undefined); //error 
test1('hello')//hello 

let word ="test";
let m = word.replace(/t/g, 'm');
console.log(`m=${m}`)