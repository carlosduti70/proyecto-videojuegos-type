"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'http://localhost:8081/juegos';
function fetchCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        displayCharacters(data);
    });
}
function displayCharacters(characters) {
    const container = document.getElementById("characters-container");
    if (container) {
        characters.forEach(character => {
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
