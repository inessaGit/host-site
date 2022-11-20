
/*
https://www.codewars.com/kata/5837fd7d44ff282acd000157/train/javascript

Task: Write a function which returns the number of days from today till the given date. 
The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"

*/

function countDays(d){
    
    let current = new Date();
    let current_year = current.getFullYear();
    let current_month=current.getMonth();
    let current_day=current.getDate();
    let current_hours=current.getHours();
    let current_minutes=current.getMinutes();
    let current_ms= current.getMilliseconds();

    let d_year = d.getFullYear();
    let d_month=d.getMonth();
    let d_day=d.getDate();
    let d_hours=d.getHours();
    let d_minutes=d.getMinutes();
    let d_ms= d.getMilliseconds();

    

  }