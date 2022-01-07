/*
https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

in a scenario where both arrays (students and seats) are equal in length, 
sorting both arrays would actually automatically put them in an optimal order after that.

https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/discuss/1527466/JavaScript-solution-132ms

Constraints:
in == seats.length == students.length
1 <= n <= 100
1 <= seats[i], students[j] <= 100
*/

var minMovesToSeat = function(seats, students) {
    let minMoves=0;
    seats=seats.sort((a,b)=>{return a-b});
    students=students.sort((a,b)=>{return a-b})

    for(let i = 0;  i < seats.length; i++){
        minMoves += Math.abs(seats[i] - students[i]);
    }
    return minMoves;
};

seats = [3,1,5], students = [2,7,4]
