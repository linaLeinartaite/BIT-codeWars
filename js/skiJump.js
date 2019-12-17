"use strict";
console.log("........................");
console.log("ski Jump");
/*
You are a skier (marked below by the X). You have made it to the Olympics! Well done.

///////////////////////////////////////////////////////

\_\_\_X\_
\*\*\*\*\*\
\*\*\*\*\*\*\
\*\*\*\*\*\*\*\
\*\*\*\*\*\*\*\*\
\*\*\*\*\*\*\*\*\*\\.\_\_\_\_/
Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a height of 5 (5 rows of stars). Speed is mountain height * 1.5.
The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be rounded to 2 decimal places.
You must return the length of the resulting jump as a string in the following format:
when less than 10 m: "X metres: He's crap!"
when between 10 and 25 m: "X metres: He's ok!"
when between 25 and 50 m: "X metres: He's flying!"
when more than 50 m: "X metres: Gold!!"
So in the example case above, the right answer would be "33.75 metres: He's flying!"
*/

//reikia suskaiciuoti greiti; paskui, kiek toli nuskrido; ir tada duoti atsakyma gerai tai ar blogai:
// kalno aukstis === kiek eiluciu zvaigzduciu
//  Speed is mountain height * 1.5.
//jump length is calculated by (mountain height * speed * 9) / 10 and rounded iki dvieju skaiciu po kablelio
//

//A. funkcija testavimui
function test(t1,t2){
    if (t1===t2) {
        console.log(true);
    }else {console.log(false);}
}


//SPRENDIMAS
function skiJump(mountain){
    const mountainHeight = mountain.length;
    const speed = mountainHeight*1.5;
    let jumpLength = (mountainHeight  * speed * 9)/10;
    
    //matematiskai tvarkinga ir palieka skaiciu
    jumpLength=Math.round(jumpLength*100)/100;
    
    //kad apsisaugome nuo netycines dalybos klaidos (e.g. x.000000001) naudosime pastariji:
   jumpLength = jumpLength.toFixed(2); //needed to have 2 numbers after comma (iskaitant nulius). 

    // visi if'ai kiek nusokai ka paraso
    if(jumpLength<10){
        return jumpLength + " metres: He's crap!"; //it does not work with comma (,) like in console.log; it has to be plus (+) for joining those pieces; 
    }
    
    if(jumpLength>=10 && jumpLength<25){
        return jumpLength + " metres: He's ok!"
    }
    if(jumpLength>=25 && jumpLength<50){
        return jumpLength + " metres: He's flying!"
    }
    if(jumpLength>=50){
        return jumpLength + " metres: Gold!!"
    }
}


console.log(skiJump(['*']));
console.log(skiJump(['*', '**', '***']));
console.log(skiJump(['*', '**', '***', '****', '*****', '******']));
console.log(skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********']));

test( skiJump(['*']), '1.35 metres: He\'s crap!' );
test( skiJump(['*', '**', '***']), '12.15 metres: He\'s ok!' );
test( skiJump(['*', '**', '***', '****', '*****', '******']), '48.60 metres: He\'s flying!' );
test( skiJump(['*', '**', '***', '****', '*****', '******', '*******', '********']), '86.40 metres: Gold!!' );

//cia kalno auksti pasako kiek arejuje yra elementu (tas zvaigzduciu kiekis elemente nieko nereiskia);

//APVALINIMAS yra pora budu
const a= 800.45362
//A.
a.toFixed(2); //sklaiustuose nurodai iki keliu skaitmenu ir VERCIA I STRING'a;
//B.
Math.round(a*100)/100; // ISLAIKO KAIP SKAICIU;
const b= 99;

b.toFixed(2); //prides pora nuliuku po kablelio;
