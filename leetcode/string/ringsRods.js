/*
https://leetcode.com/problems/rings-and-rods/

There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

Return the number of rods that have all three colors of rings on them.

Approach: 
- brute force 

let rod1 =new Rod ();
console.log(rod1.setColor='R');
console.log(rod1.setColor='R');
console.log(rod1.getR); //true 
console.log (rod1.countR)
//console.log(arrayRods[2])
*/
var countPoints = function(rings) {
    class Rod {
    constructor(hasR,hasG,hasB){
       this.hasR=hasR;
       this.hasB=hasB;
       this.hasG=hasG;
    }
    get getR(){ return this.hasR}
    get getB(){return this.hasB}
    get getG(){return this.hasG}
    
     countR=0;
     countB=0;
     countG=0;
    
    set setColor(color){
       //color==='R'?this.hasR=true:color==='B'?this.hasB=true:this.hasG=true;
       if (color==='R'){this.hasR=true;this.countR++ }
       else if (color==='G'){this.hasG=true;this.countG++ }
       else  { this.hasB=true;this.countB++ }

     }
    }

    let arrayRods =[]; 
    for (let i=0;i<10;i++){
        //create 9 rods 
        let rod = new Rod (false,false,false);
        arrayRods.push(rod);
    }
    
    let rodNum;
    let color ='';
    for (let i=0;i<rings.length; i++){
        if (i%2===0){
            color = rings[i];//odd
            console.log(`color ${color}`)
        }
        else {
            rodNum=parseInt(rings[i]);//even 
            console.log(`rodNum ${rodNum}`)
        }
        console.log(arrayRods[rodNum])
       let rod =arrayRods[rodNum];
      // rod.setColor=color;
    }
};

let rings = "B0B6G0R6R0R6G9" //exp 1 the rod labeled 0 hold all 3 rings 
console.log(countPoints(rings))