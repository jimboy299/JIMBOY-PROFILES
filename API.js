
    document.getElementById('search').onclick = getPokemon();


     function capitalizeFirstLetter(string) {
       return string.charAt(0).toUpperCase() + string.slice(1);
     }
     
     function lowerCaseName(string) {
       return string.toLowerCase();
     }
     
     function getPokemon(e) {
       const name = document.querySelector("#pokemonName").value;
       const pokemonName = lowerCaseName(name);
     
       fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
         .then(response => response.json())
         .then(data => {
           const abilities = data.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(", ");
           const types = data.types.map(type => capitalizeFirstLetter(type.type.name)).join(", ");
     
           document.querySelector(".pokemonBox").innerHTML = `
             <div>
               <img
                 src="${data.sprites.other["official-artwork"].front_default}"
                 alt="Pokemon name"
               />
             </div>
             <div class="pokemonInfos">
               <h1>${capitalizeFirstLetter(data.name)}</h1>
               <p>Type: ${types}</p>
               <p>Abilities: ${abilities}</p>
               
             </div>`;
         })
         .catch(err => {
           document.querySelector(".pokemonBox").innerHTML = `<h4>Pokemon not found 😞</h4>`;
           console.log("Pokemon not found", err);
         });
     
       e.preventDefault();
     }
     