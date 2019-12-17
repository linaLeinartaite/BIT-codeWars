"use strict";
console.log("........................");
console.log("teckets");

//kazkas pardavineja tiketus ir tas pardavejas neturi jokiu kupiuru ; ateina pirmas ir duoda 25e == nusiperka; antras duoda 25e nusiperka; trecias duoda 50e == gauna grazos 25e;

//let peopleInLine = ([25, 25, 50]) // => YES 
//let peopleInLine2 = ([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
//let peopleInLine3 = ([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

// test() function

function test(t1,t2){
    if (t1 === t2) {
        console.log(true);
    }
    else {
        console.log(false);}
    }
    
    //sprendimas
    
    function tickets (peopleInLine) {
        
        //cia sitie reiskia kiek kupiuru turiu 25, 50 ir 100;
        // money = [n(25), n(50), n(100)]
        // 0 reiskia neturiu kupiuros; -1 reiskia jis skoloje, t.y. atsakymas NO jei tik atsiranda -1;
        let money = [0,0,0];
        
        //prasieinam pro kupiuras
        for(let i=0; i<peopleInLine.length; i++){
            const kupiura = peopleInLine[i];
            
            //paemam pinigus
            if (kupiura === 25){
                money[0]++; // t.y. gaunasi [1,0,0]
            }
            if (kupiura === 50){
                money[1]++; // t.y. gaunasi [0,1,0]
            }
            if (kupiura === 100){
                money[2]++; // t.y. gaunasi [0,0,1]
            }
            
            //atiduodam graza
            if (kupiura === 50){
                //tikrinu ar turiu 25
                if (money[0]>0){
                    money[0]--; //>> jei grazinu 25: [1,0,0] - [0,0,0]
                }else {
                    return "NO";
                }
            }
            if (kupiura === 100){
                //pirma atsikratom stambiom kupiurom
                //bandom grazinti 50 +25
                if (money[1]>0){
                    //grazinu 50
                    money[1]--; 
                    if(money[0]>0){
                        money[0]--;
                        //grazinu 25
                    }else {
                        return "NO";
                    }
                } else {
                 //tuo atveju jei 50 neturim (money[1]=0), tada bandom grazinti 3* 25
                    if(money[0]>2){
                        //grazinu 3*25
                        money[0]--;
                        money[0]--;
                        money[0]--;
                    }else {
                        return "NO";
                    }
                }
            }
        }    
        return "YES";
    }
    
    
    test( tickets([25, 25, 50, 50]), "YES" );
    test( tickets([25, 50, 50]), "NO" );
    test( tickets([50]), "NO" );
    test( tickets([100]), "NO" );
    test( tickets([25, 100]), "NO" );
    test( tickets([25, 25, 100]), "NO" );
    test( tickets([25, 25, 25, 100]), "YES" );
    test( tickets([25, 50, 25, 100]), "YES" );
    test( tickets([25, 25, 50, 100]), "YES" );
    test( tickets([25, 25, 50, 50, 100, 100]), "NO" );
    test( tickets([25, 25, 50, 50, 100]), "NO" );
    
    
    
    