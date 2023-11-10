interface characters {
        id:number,
        titulo: string,
        plataforma: string,
        anoLanzamiento: number,
        PuntuacionMedia: Number,
    }    
    

const url = 'http://localhost:8081/juegos';
async function fetchCharacters() {
    const response = await fetch(url);
    const data= await response.json();

    displayCharacters (data) ;
}

function displayCharacters(characters: any[]){
    const container = document.getElementById("characters-container");
    if(container){
        characters.forEach(character =>{
            container.innerHTML += `
                <div class="character-card">
                    <p>ID: ${character.id}</p>
                    <p>Titulo: ${character.titulo}</p>
                    <p>Plataforma: ${character.plataforma}</p>
                    <p>Año de lanzamiento: ${character.anoLanzamiento}</p>
                    <p>Puntuacion media${character.PuntuacionMedia}</p>
                </div>
            `;
        });
    }
}

fetchCharacters();