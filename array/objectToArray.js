//object to array => using Object.entries(obj) returns array 
let obj ={};
let str='abcdefaa';
for (let i=0;i<str.length;i++){
    if(!(str[i] in obj)){
        obj[str[i]]=1;
    }
    else {
        obj[str[i]]=obj[str[i]]+1;
    }
}
console.table(obj);
Object.entries(obj).forEach((entry)=>{
    const [k,v]=entry;
    console.log(k,v);
})
//Map to array 
let map = new Map();
str.split('').forEach((el)=>{
   if(!map.has(el)){
       map.set(el,1);
   }
   else {
       map.set(el,map.get(el)+1);
   }
})

console.log(map);

//Map filter out and display keys based on value
let res = Array.from(map.keys()).filter((key)=>{
    return map.get(key)===1; //where val =1 
  });
  console.log(res); 

  let res2=Array.from(map.entries()).filter(([k,v])=>{
       return map.get(key)>1;
  });
  
  console.log(res2);
  