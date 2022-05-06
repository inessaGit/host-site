/*
https://www.java67.com/2018/05/how-to-rotate-array-left-and-right-by-given-number.html?m=1

Left rotation: 
- shift all elements to the left means arr[i]=arr[i+1]; loop till n-1 ; 
- first el should be stored in temp 

Right rotation: 
- shift all elements to the right means arr[i]=arr[i-1]; 
- last el should be stored 
*/

/*
remove first element from array and reduce the length of array accordingly.
 So, we can loop d times and then at each iteration remove the element 
 from start and put it at the end.
*/
function rotateLeft1(d, arr) {
    for(let i = 0; i < d; i++){
        arr.push(arr.shift())
    }
    return arr;
}
function rotateLeft2(d, arr) {
    return [...arr.slice(d), ...arr.slice(0,d)]
}


function rotateRight(arr,numOfRotations){

    let length = arr.length;
    for (let i=0;i<numOfRotations;i++){
        let temp =arr[0]; //first el
        for(let j=0;j<length-1;j++){
         arr[j]=arr[j+1];
        }
       arr[length-1]=temp;

    }
    console.log(arr);
    return arr;
}

function rotateLeft(arr,numOfRotations){

    let length = arr.length;
    for (let i=0;i<numOfRotations;i++){
        let temp = arr[length-1]; //last el
        for(let j=length-1;j>=0; j--){
           arr[j]=arr[j-1];
        }
        arr[0]=temp;
    }
    console.log(arr);
    return arr;
}

let arr =[10,20,30,40];
rotateLeft(arr,1);
rotateRight(arr,1); 