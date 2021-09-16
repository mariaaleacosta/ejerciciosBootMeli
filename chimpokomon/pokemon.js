const baseURL = 'https://pokeapi.co/api/v2';



//obtener pokemon fav 
async function getFavPokemon(pokemonName){
    let favPokemon = await fetch(`${baseURL}/pokemon/${pokemonName}`);
    let favPokemons= await  favPokemon.json();
    console.log(favPokemons);
}
getFavPokemon('pikachu');



//obtener 15 pokemons 


async function getPokemons(){
    let pokemon = await fetch(`${baseURL}/pokemon?offset=100&limit=15`);
    let pokemons= await  pokemon.json();
    console.log(pokemons);
    
}

getPokemons(); 

//obtener 15 pokemons  y sacar los quue pesen mas de 150
async function getPokemonsWeight(){

    // consumir la api 
    let pokemon = await fetch(`${baseURL}/pokemon?offset=100&limit=15`);

       // convierto la data a json 
    let pokemons= await (pokemon.json());

    //hago un nuevo fetch para traerme la url que esta dentro de  los resultados de pokemon  
     const arrayPokemon= await pokemons.results.map(res=> fetch(res.url));

     //recorro el array de chimpokomons de nuevo para sacar el  peso del chimpokomon
     const pokemonWeight= await Promise.all(arrayPokemon.map(pokeW=> pokeW.json()));

     const filterPrueba= pokemonWeight.filter(data=> data.weight>=150);
     console.log(filterPrueba);
}
getPokemonsWeight();
 
