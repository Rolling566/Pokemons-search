const search = document.getElementById("search");

search.addEventListener('click', fetchData);
async function fetchData() {

    try {
        let res = document.getElementById("res");
        let pokeName = document.getElementById("poke").value.toLocaleLowerCase();
        res.innerHTML = `A procurar por dados sbre ${pokeName}`
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        if (!response.ok) {
            throw new Error("Couldnt fetch resource")
        }
        const data = await response.json();

        let pokeFoto = document.createElement('img')
        pokeFoto.src = data.sprites.front_default;
        pokeFoto.alt = `${data.name} image`;
        pokeFoto.style.display = 'block';

        let type = data.types.map(typeInfo => typeInfo.type.name).join(', ')

        res.innerHTML = `<span>Nome:</span> ${data.name} <br> <span>Peso:</span> ${data.weight} <br> <span>Tipo:</span> ${type} <span> <br> Especie:</span> ${data.species.name}`
        res.append(pokeFoto)
    
    } catch (error){
        res.innerHTML = 'Pokémon não encontrado'
        console.log("Couldnt fecth resurces")
    }
}






















/* fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
    .then(response => {
        if (!response.ok) {
            throw new Error("Couldnt fetch resources.")
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error)); */


/*
import dados from './dados.json' with { type: 'json' };
console.log(dados) */

/* import {readFile} from 'fs/promises'

readFile('dados.json', 'utf8') 
    .then(response => {
        const data = JSON.parse(response);
        console.log(data);
    })
    .catch(erro => console.error(erro));
*/


