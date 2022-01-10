//declare map and filter its value 
let map=new Map();
map.set(1,1).set(2,2).set(3,1).set("4",4).set('str',"string");
console.log(map)

let map2=new Map([...map].filter(([k,v])=>v>=2));
console.log(map2); //Map(2) { 2 => 2, '4' => 4 }

let map3=[...map];//array of arrays [ [ 1, 1 ], [ 2, 2 ], [ 3, 1 ], [ '4', 4 ], [ 'str', 'string' ] ]
console.log(map3);
console.log(map3.flat())

//Loop over map keys
for(let key of map.keys()){
    console.log(`using key ${key}`)
}

//Loop over map values
for(let v of map.values()){
    console.log(`using value ${v}`);
    //console.log(v>2) //true false output
}

//Loop over map entries [k,v]
for(let [k,v] of map.entries()){
    console.log(`using map.entries() ${k} ${v}`)
}

//console.log(Object.keys(map)); //[] why empty?? 
//let el =Object.keys(map).filter((key)=>map[key]>=2);
//console.log(el);

var object1 = { 0: 'x', 1: 'y', 2: 'z' };
  console.log(Object.keys(object1)); //[ '0', '1', '2' ]

const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

const object = {'a': 1, 'b': 2, 'c' : 3};
//console.log(Object.keys(object))
for (const [key, value] of Object.entries(object)) {
  //console.log(key, value);
}

//filter map entries by value 

let res = Array.from(map.entries()).filter(([k,v])=>{
    return v===1;
})