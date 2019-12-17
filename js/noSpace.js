"use strict"; 
console.log("................")
console.log("remove Spaces");
//remove spaces from string and return string withouth spaces
//'8 j 8   mBliB8g  imjB8B8  jl  B'; >>Ats.: '8j8mBliB8gimjB8B8jlB'
//'8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd';>> Ats.: '88Bifk8hB8BB8BBBB888chl8BhBfd'
//'8aaaaa dddd r     ' >> Ats.: '8aaaaaddddr'  

//SPRENDIMAS

//A. funkcija testavimui
function test(t1,t2){
    if (t1===t2) {
        console.log(true);
    }else {console.log(false);}
}

// B. sprendimas no.1;

function noSpace(string){
    if(typeof(string) !== "string"){
        return "";
    }   
    let result="";
    for(let i=0; i<string.length; i++){
        if((string)[i]===" "){
            continue;// t.y. sita rezultata praleidzia 
        }
        // result = result +string[i]; apacioje taspats tik trumpesnis
        result += string[i];
    }
    return result;
}

test(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
test(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
test(noSpace('             '), '');

// C. sprendimas no.2:

console.log(
    '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'.split(" ").join(""));
/*
// su split() and join();
random textas gali buti interpretuojamas kaip masyvas
split() >> nurodai vidui pagal koki nri skirsi, pav. tarpas (" ")
join() >>> sujungia skliausteliuose nurodant per ka (""); jei tusti skliausteliai jungia per kableli 
*/


        
        