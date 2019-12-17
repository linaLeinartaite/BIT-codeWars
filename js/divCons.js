"use strict";
console.log("........................");
console.log("div Cons");

// turim areju is skaiciu ir "textiniu skaiciu' ir reikia subtraktinti textiniu suma is tikru
 
 
// parseInt() >>> vercia textini skaiciu i skaiciu (galioja for integers) jei yra skaicius su kableliu tai dalis po kablelio yra ignoruojama
// parseFloat() >>> paversia i skaiciu ir palieka ta dali po kablelio nesuapvalinta
 
//funkcija testavimui
function test(n1, n2){
    if (n1===n2){
        return console.log(true);
    }else{
        console.log(false);
    }
}

 const arr= [2, "2", 10, "3"];
  
 function divCon(x){
    let sum =0;
    
    for(let i=0; i<x.length; i++){    
        let number = x[i];
        
        if (typeof(number) ==="number"){
            sum +=number;
        }
        if (typeof(number) ==="string") {
            sum -= parseInt(number);
        }
    }
    console.log("Final sum: ",sum);
    return sum;
}

//tests
test( divCon([9, 3, '7', '3']), 2 );
test( divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14) ; 
test( divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13 );
test( divCon([0, '0']), 0 );
test( divCon([0]), 0 );
test( divCon(['-850']), 850 );
test( divCon([]), 0 );

//reduce() method eina per areju ir ji sumuoja 
