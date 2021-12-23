
let j = "aA";
let s1 = "aAAbbbb"; //exp 3 
let regexp=new RegExp(j,'g')

let  jewels = "aA", stones = "aAAbbbb";
function test(){
//run outter loop 7 times ; run inner loop 2 times 
let result =0;
for (let i=0;i<stones.length;i++){
    //console.log("insde i i="+i)
    for (let j=0;j<jewels.length;j++){
        //console.log("inside j; j="+j)

        if(stones[i]==jewels[j]){
            result++; 
        }
    }
    //console.log("=========")
}
console.log(result)

}

test(); 