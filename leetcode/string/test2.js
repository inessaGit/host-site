

function findFirstUnique(arr){
    let unique; 
        for (let el of arr){
            console.log(el); 
            if (arr.includes(el)!=true){
                //found unque 
                console.log('inside IF')
                unique=el;
                return unique;
            }
    
        }
         return null; 
    }

let a= [9,2,3,2,6,6];
let b=[4,5,1,2,0,4]; 
findFirstUnique(a); 