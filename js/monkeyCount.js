"use strict"; 
console.log("........................");
console.log("count the Monkeys!");
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from one.
//As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//funkcija testavimui
//!!!!
// [1,2,3] === [1,2,3] >>> //false
//arejus nera primitivus dalykas ir jo taip lyginti negalima;
// reikia lyginti narius viduje;
// todel test() funkcijoje mes verciame tuos arejus i string'us o juos jau galima lyginti:

function test(n1, n2){
    if (JSON.stringify(n1)===
    JSON.stringify(n2)){
        return console.log(true);
    }else{
        console.log(false);
    }
}

function monkeyCount(n) {
    let result =[];

    if (typeof(n) !== 'number' ||
    isFinite(n)=== false ||
    n<1){
        return result;
    }    
    for(let i=1; i<=n; i++)  {
        result.push(i);             
    }
    console.log(result);
    return result;    
}


test(monkeyCount(3),[1,2,3]);
test(monkeyCount(8),[1,2,3,4,5,6,7,8]);
//!!!
//antrame teste buvau pridejus daugiau skliausteliu, 
//test((monkeyCount(8),[1,2,3,4,5,6,7,8]));
//ir neskaitant kad jie buvo is abieju pusiu, ir turetu nekeist esmes, bet keite, ir test() grazinejo false


