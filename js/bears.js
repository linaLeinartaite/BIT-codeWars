"use strict"
console.log("....................");
console.log("MATING BEARS");
/*
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.
You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.
Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
Return an array containing a string of only the mating pairs available. e.g:
'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)
and true if the number is more than or equal to x, false if not:
(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];
x will always be a positive integer, and s will never be empty
*/

//taigi poros gali buti 'B8" arba '8B'
// x =number of mating pairs of bears.
//s == string where we are looking for bears.
//true if the number is more than or equal to x, false if not;

//replace("what", "with what"); jei norime ka norss pakeisti stringe; 
//!!!
// jis keicia pirma rasta simboli, taigi kai jeigu bandau keisti s[i] pirma, (o tik paskui s[i+1]) tai nekeis pagal indeksa (vieta sekoje), o paskaicius: e.g. s[i]===8 tai keis ne ta 8 kuris yra i pozicijoje o pati pirma rasta astuoneta >>
//!!  taigi atvejui zemiau reikia keisti abi raides iskarto :
//      s=s.replace(s[i]+s[i+1], "--");

//funkcija testavimui
function test ( pirmas, antras ) {
    if ( JSON.stringify(pirmas) === JSON.stringify(antras) ) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

function bears(x, s){
    let pairs ="";
    let pairsNumber ="";
    let rightCount;
    
    //bellow length-1 is needed because later on I am checking for i+1 and in case of last symbol that would be "undifiend"
    for (let i=0; i<s.length-1;  i++){
        if((s[i] === 'B' && s[i+1]=== '8') || (s[i]=== '8' && s[i+1] === 'B')){
            console.log(s, i, i+1, s[i], s[i+1]);
            pairsNumber++;
            pairs= pairs + s[i] + s[i+1];
            
            // replace() keicia pirmaji rasta simboli, siuo atveju pirma musu rasta pora;
            s=s.replace(s[i]+s[i+1], "--");
            // console.log(s, i, i+1, s[i], s[i+1]);
            // s=s.replace(s[i+1], "-");
            console.log(s, i, i+1, s[i], s[i+1]);
            console.log('cycle i:'+ `${i}`, '; pairs: '+ pairs, '; string: '+ s);
        }
    }
    if(pairsNumber >=x) {
        rightCount = true;
    } else{
        rightCount = false;
    }
    return [pairs, rightCount];
}

// test( bears(1, 'asd8B8asd'), ["8B", true] );
// test( bears(1, 'asd8Basd'), ["8B", true] );
// test( bears(2, 'asd8Basd'), ["8B",false] );
// test( bears(1, 'asdB8Basd'), ["B8",true] );
// test( bears(2, 'asdB8B8asd'), ["B8B8",true] );
// test( bears(2, 'asdB88Basd'), ["B88B",true] );
// test( bears(2, 'asd8B88Basd'), ["8B8B",true] );
// test( bears(1, 'asd88BBasd'), ["8B",true] );
// test( bears(7, '8j8mBliB8gimjB8B8jlB'), ["B8B8B8",false] );
test( bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'), ["8BB8B8B88B",true]) ; 
// test( bears(8, '8'), ["",false] );

