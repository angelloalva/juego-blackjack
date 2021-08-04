
/**
 * c=trebol
 * d=diamantes
 * s=espadas
 * h=corazones
 */
let baraja=[];
let tipos=['C','D','H','S'];
let mayores=['J','Q','K','A'];
let j=0;
const crearbaraja = ()=>{
    for(let i=2;i<=14;i++){     
        if (i>=11) {
            for (let tipo of tipos){
                baraja.push( mayores[j] + tipo);
           } 
            j++;
        }else{
          for (let tipo of tipos){
                baraja.push( i + tipo);
            }  
        }
               
    }
    console.log(baraja);
    baraja=_.shuffle(baraja);
    console.log(baraja);
};

crearbaraja();