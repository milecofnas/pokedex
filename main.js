const form = document.forms[0]
const enviar = form.elements[0]

form.onsubmit = e => {
    e.preventDefault()
  buscarPokemon(enviar.value)
  
}

const buscarPokemon = async valorPokemon => { 
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${valorPokemon}`)
    const poke = await data.json() 

    const pokemon = {
      name: poke.name,
      id: poke.id,
      image: poke.sprites.front_default,
      type: poke.types.map(type => type.type.name).join(', '),
    };

    displayPokemon(pokemon);
}

const displayPokemon = pokemon => {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = `
  <li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      <p class="card-subtitle">Type: ${pokemon.type}</p>
  </li>
  `;
};




// Tarea
// 1. Convertir el fetch en un async / await
// 2. Recibir el input del usuario y mostrar el pokemon correspondiente 
// 3. PUNTOS EXTRA asignar las variables con destructuring 
