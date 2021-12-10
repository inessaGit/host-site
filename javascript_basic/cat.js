
//custom constructor
function Cat (breed, name,background){
this.breed=breed; 
this.name=name;
this.background=background; 
}

let cat1 =new Cat();
cat1.name="holly";
cat1.breed="maincoon";
cat1.age=2; //adding property which has not been declared 
console.log(cat1);
//Cat { breed: 'maincoon', name: 'holly', background: undefined, age: 2 }
delete cat1.background;
console.log(cat1); //Cat { breed: 'maincoon', name: 'holly', age: 2 }

let cat2={...cat1}; //create a clone of cat1; 
let cat3={owner:"",...cat2}; //created a merged clone of NEW ADDED PROPERTY and cat2 
console.log("cat2 "+cat2); //cat2 [object Object]

console.log(cat3) //{ owner: '', breed: 'maincoon', name: 'holly', age: 2 }
