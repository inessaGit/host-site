let array = [1, 2, 3, 5, 2, 8, 9, 2]

let s=array.filter(x=>x===2).length
console.log(s)


console.log("hello" || "world")
console.log("foo" && "bar")

var foo = 10 + '20';
console.log(foo);   //Result '1020' because its string concat operation'

var commonChars = function(words) {
    let res =[...words[0]];
      
      for (let i=1;i<words.length;i++){
          let temp = words[i].split(''); //curr word as array 
          res=res.filter(ch=>{
              let index = temp.indexOf(ch);
              return index>-1 ? temp[index]=true : false
          });
      }
      return res; 
  };