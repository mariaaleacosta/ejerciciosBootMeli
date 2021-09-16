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
    let pokemon = await fetch(`${baseURL}/pokemon?offset=100&limit=15`);
    let pokemons= await (pokemon.json());
     const arrayPokemon= await (Promise.all(pokemons.results.map(res=> fetch(res.url))));

     const pokemonWeight= await Promise.all(arrayPokemon.map(pokeW=> pokeW.json()));

     const filterPrueba= pokemonWeight.filter(data=> data.weight>=150);
     console.log(filterPrueba);

   /*  console.log(results) */

/*     console.log(pokemons); */
 

    

    
    
}


getPokemonsWeight();
 