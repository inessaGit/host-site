
let map = new Map();
map.set(8,1);
map.set('a',2);
map.set(8,2); //dup key ignored

console.log(map) //Map(2) { 8 => 2, 'a' => 2 }
console.log(map.size)//2

console.log(map.get(8)); //2

