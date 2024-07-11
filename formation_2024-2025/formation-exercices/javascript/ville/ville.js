

const CITIES = [
    {
        name: "Paris",
        image: "../exoville/images/paris.jpg",
        country: "France",
        continent: "Europe",
        nbResidents: 2148327,
    },
    {
        name: "Tokyo",
        image: "../exoville/images/tokyo.jpg",
        country: "Japan",
        continent: "Asia",
        nbResidents: 13929286,
    },
    {
        name: "Washington",
        image: "../exoville/images/washington.jpg",
        country: "United States",
        continent: "North America",
        nbResidents: null,
    },
    {
        name: "Ottawa",
        image: "../exoville/images/ottawa.jpg",
        country: "Canada",
        continent: "North America",
        nbResidents: 1016356,
    },
    {
        name: "Rome",
        image: "../exoville/images/rome.jpg",
        country: "Italy",
        continent: "Europe",
        nbResidents: 2872800,
    },
    {
        name: "Buenos Aires",
        image: "../exoville/images/buenosaires.jpeg",
        country: "Argentina",
        continent: "South America",
        nbResidents: null,
    },
    {
        name: "Brussels",
        image: "../exoville/images/brussels.jpg",
        country: "Belgium",
        continent: "Europe",
        nbResidents: 1211035,
    },
    {
        name: "Zagreb",
        image: "../exoville/images/zagreb.jpg",
        country: "Croatia",
        continent: "Europe",
        nbResidents: null,
    },
];

console.log(CITIES);





// cree des éléments
function creationCard(city){
    const CARD = document.createElement('div');
    CARD.className = 'card';

    const IMAGE = document.createElement('img');
    IMAGE.src = city.image;
    IMAGE.alt = city.name;

    const NAME = document.createElement('h2');
    NAME.textContent = city.name;

    const COUNTRY = document.createElement('p');
    COUNTRY.textContent = `Country: ${city.country}`;

    const CONTINENT = document.createElement('p');
    CONTINENT.textContent = `Continent: ${city.continent}`;

    const NB_RESIDENTS = document.createElement('p');
    NB_RESIDENTS.textContent = `Residents: ${city.nbResidents ?? 'donnée inconnue'}`;
    // on écrit le nombre ou si c'est null on ecrit le texte


    //appendChild() -> Ajouter UN node enfant
    // placement des enfants les uns apres les autres
    CARD.appendChild(NAME);
    CARD.appendChild(IMAGE);
    CARD.appendChild(COUNTRY);
    CARD.appendChild(CONTINENT);
    CARD.appendChild(NB_RESIDENTS);

    // ou CARD.append(NAME, IMAGE, COUNTRY, CONTINENT, NB_RESIDENTS);

    // renvois les éléments "CARD" sous forme html
    return CARD;
}


// nw function qui a partir d'un tableau va cree plusieurs cards
function positionCities(cities) {
    // cherche l'id 'cities-container' pour le stocker les élémnts dans 'container'
    const CONTAINER = document.getElementById('cities-container');

    CONTAINER.innerHTML = ''; 
    // efface les carte existantes

    //forEach -> utilisé sur les tableaux déjà remplis avec les element du city au dessus
    cities.forEach(city => {
        // crée une carte html qui reprend les infos de la function creationCard
        const cityCard = creationCard(city);
        // ajout cityCard à l'intérieur de l'élément container, donc l'affiche dans la page web
        CONTAINER.appendChild(cityCard);
    });
}

// Modifiée : Ajout d'un écouteur d'événements pour le sélecteur de continents

// document.getElementById('continent-select').addEventListener('change', function () {
//     const selectedContinent = this.value;
//     const filteredCities = selectedContinent === 'all' ? CITIES : CITIES.filter(city => city.continent === selectedContinent);
//     positionCities(filteredCities);
// });

document.getElementById('continent-select').addEventListener('change', function () {
    const selectedContinent = this.value;
    // Utilisation de la méthode .filter pour filtrer les villes
    const filteredCities = CITIES.filter(city => {
        return selectedContinent === 'all' || city.continent === selectedContinent;
    });
    positionCities(filteredCities);
});

positionCities(CITIES);



const str = "je veux me retourner la tete";
const strReverse = str.split("").reverse().join("");
// Ce n'est pas une façon robuste d'inverser une chaîne

// const strReverse = str.split(/(?:)/u).reverse().join("");
// => "́emuśer"
console.log(str);
console.log(strReverse);








