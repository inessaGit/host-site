/*

https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

*/
function warnTheSheep(queue) {
    let msg ='';
    let n=queue.length;

    for (let i=n-1; i>=0;i--){
      if (queue[i]=='wolf') {
        console.log(`i=${i} queue[i]=${queue[i]}`);
        msg="Pls go away and stop eating my sheep";
      }
      else if (queue[i]=='sheep' && queue[i-1]=='wolf')
      {
        console.log(`i=${i} queue[i]=${queue[i]}`);
          msg=`Oi! Sheep number ${n-i}! You are about to be eaten by a wolf!`
          break;
        }
       
    }
    return msg; 
  }

let q=    ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]
//exp  "Oi! Sheep number 2! You are about to be eaten by a wolf!"

console.log(warnTheSheep(q));