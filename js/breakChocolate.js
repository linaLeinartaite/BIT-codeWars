"use strict";
console.log("........................");
console.log("break Chocolate");
/*
Your task is to split chocolate of given dimentions m and n into small squeres; Each squere is of size 1*1 and unbreackble; Return function which will return minimal numbrt of breaks needed. If input data is invalid you should return 0 ( as if no breaks are needed if there are no chocolate tio split);
*/

//test() function:
function test( t1, t2 ) {
    if ( t1 === t2 ) {
        console.log(true)
    } else {
        console.log(false);
    }
}

//
function breakChocolate(n,m){
    if(typeof(n) !== 'number'||
    typeof(m) !== 'number' ||
    isFinite(n) === false ||
    isFinite(m)=== false ||
    n<1 ||
    m<1){
        return 0;  
    }
    return n*m-1;
}

test( breakChocolate(5, 5) , 24 );
test( breakChocolate(2, 2) , 3 );
test( breakChocolate(2, 'bla') , 7 );
test( breakChocolate(1, 1) , 0 );

