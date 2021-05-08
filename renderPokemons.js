console.log(pokemonData);
console.log(pokemonData);

//------------ my version 1

let HTML='';

for (let i = 0; i < pokemonData.length; i++) {
    let pokemon = pokemonData[i];
    HTMLFragment = ``;

    if((i) % 5 == 0){
        HTMLFragment = `<div class="row">`;
    }

    HTMLFragment += `
    <div class="col-md-3">
        <div class="card">
            <h2>${(pokemon.name) ? pokemon.name : 'Pokemonas'}</h2>
                <a href="${pokemon.url}"><img src="${pokemon.img}" alt="ffiiiuuu"></a>
        </div>
    </div>`;

    if((i+1) % 5 == 0){
        HTMLFragment = `</div>`;
    }

    HTML += HTMLFragment;
}

document.getElementById("container").innerHTML = HTML;

