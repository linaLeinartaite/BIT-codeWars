"use strict";
//TRECIAS UZDAVINYS 
console.log("........................");
console.log("bonus Time");
/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).
*/

//funkcija testavimui 

function test(t1,t2){
    if (t1 === t2) {
        console.log(true);
    }
    else {
        console.log(false);}
    }

//!!    
//cia tam pound'o zenklui === "\u00A3"

function bonusTime(salary, bonus) {
    if(typeof(salary) !== 'number' ||
    isFinite(salary) === false || //sitas atmeta begalybe, nes begalybe yra 'number' tipo, bet is NOT Finite :)
    salary%1 !== 0 ||  //Sitas reikalingas nes salygoje pasakyta kad alga turi buti sveikas skaicius, i.e. 1000.01%1 ==0.009999999999990905 t.y NELYGU NULIUI
    salary<0){
        return "\u00A3" + salary; 
    }
    if(typeof(bonus) !== 'boolean'){
        return  "\u00A3" + salary;        
    }
    if(bonus === true){
        return  "\u00A3" + salary*10;                    
    } 
    return "\u00A3" + salary;
}


test(bonusTime(10000, true), '£100000');
test( bonusTime(10000, true), '£100000' );
test( bonusTime(25000, true), '£250000' );
test( bonusTime(10000, false), '£10000' );
test( bonusTime(60000, false), '£60000' );
test( bonusTime(2, true), '£20');
test( bonusTime(78, false), '£78' );
test( bonusTime(67890, true), '£678900' );
test( bonusTime(0, true), '£0' );
test( bonusTime(-11000, true), '£-11000' );
test( bonusTime(Infinity, true), '£Infinity' );
    
    