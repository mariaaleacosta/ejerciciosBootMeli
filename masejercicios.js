// Crear un array que contenga números del 1 al 10. Retornar un nuevo array que contenga todos los números multiplicados por dos

const  numeros=  [];
for (let i = 0; i< 100; i++){
   numeros.push(i+1);
}
console.log(numeros);


const numerosDos= numeros.map(function(numero){
    console.log(numero);
    return numero * 2;
})

const numerosMayores = numerosDos.filter(numero => numero >5 );
console.log(numerosMayores);

const numeroMayorDiez = numerosMayores.find(numero=> numero> 10);
console.log(numeroMayorDiez);


let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder:3 },
     { nombre: 'metwo', poder: 6 }, 
    ]
    

const pokemonesPoder = pokemones.filter(pokemones=> pokemones.poder <=10);
console.log(pokemonesPoder);