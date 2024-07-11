// const INVENTIONS = [
//     { name : "", image : "", materiel : "" },   
// ]

const INVENTIONS = [
    { 
        name: "Potion de dé-pétrification", 
        image: "../images/potionpetrification.jpg", 
        étapes: [
            "Récolter de l'acide nitrique de sources naturelles.",
            "Mélanger l'acide nitrique avec de l'alcool distillé.",
            "Stocker la solution dans un récipient hermétique."
        ]
    },
    { 
        name: "Ampoule", 
        image: "../images/ampoule.jpg", 
        étapes: [
            "Fabriquer un filament de tungstène.",
            "Souffler une ampoule en verre.",
            "Insérer le filament dans l'ampoule.",
            "Pomper l'air pour créer un vide.",
            "Connecter les bornes électriques."
        ]
    },
    { 
        name: "Téléphone portable", 
        image: "../images/telephoneportable.png", 
        étapes: [
            "Extraire et raffiner le cuivre et l'argent.",
            "Fabriquer des circuits imprimés avec les métaux raffinés.",
            "Assembler les composants électroniques.",
            "Mouler le plastique pour le boîtier.",
            "Assembler le téléphone."
        ]
    },
    { 
        name: "Bateau à moteur", 
        image: "../images/drstoonfond.png", 
        étapes: [
            "Construire la coque du bateau en bois.",
            "Installer le moteur à essence.",
            "Fixer l'hélice au moteur.",
            "Tester le bateau sur l'eau."
        ]
    },
    { 
        name: "Voiture", 
        image: "../images/voiture.avif", 
        étapes: [
            "Construire le châssis en métal.",
            "Assembler et installer le moteur.",
            "Installer les roues.",
            "Ajouter le réservoir de carburant.",
            "Assembler l'intérieur et la carrosserie."
        ]
    },
    { 
        name: "Fil de fer", 
        image: "../images/drstoonfond.png", 
        étapes: [
            "Extraire le fer de minerais.",
            "Fondre le fer dans un four.",
            "Étendre le fer fondu pour former un fil."
        ]
    },
    { 
        name: "Boussole", 
        image: "../images/drstoonfond.png", 
        étapes: [
            "Magnétiser une aiguille en la frottant avec un aimant.",
            "Monter l'aiguille sur un support pivotant.",
            "Marquer les directions cardinales sur le support."
        ]
    },
    { 
        name: "Microscope", 
        image: "../images/drstoonfond.png", 
        étapes: [
            "Façonner les lentilles en verre.",
            "Assembler les lentilles dans un tube.",
            "Ajouter un éclairage pour illuminer l'échantillon."
        ]
    },
    { 
        name: "Acier", 
        image: "../images/drstoonfond.png", 
        étapes: [
            "Fondre le fer dans un four.",
            "Ajouter du carbone au fer fondu.",
            "Refroidir le mélange pour former de l'acier."
        ]
    },
    { 
        name: "Pile électrique", 
        image: "../images/drstoonfond.png", 
        étapes: [
            "Préparer les plaques de cuivre et de zinc.",
            "Placer les plaques dans un récipient.",
            "Ajouter une solution d'électrolyte pour permettre la réaction chimique."
        ]
    }
];


function createInventionCard(invention) {
    const container = document.createElement('div');
    container.className = 'top-container';

    const leftDiv = document.createElement('div');
    leftDiv.className = 'top-left';
    const leftContentDiv = document.createElement('div');

    const étapesH2 = document.createElement('h2');
    étapesH2.textContent = 'Étapes :';
    
    const étapesOl = document.createElement('ol');
    invention.étapes.forEach(étape => {
        const li = document.createElement('li');
        li.textContent = étape;
        étapesOl.appendChild(li);
    });

    leftContentDiv.appendChild(étapesH2);
    leftContentDiv.appendChild(étapesOl);
    leftDiv.appendChild(leftContentDiv);

    const rightDiv = document.createElement('div');
    rightDiv.className = 'top-right';

    const topQuartersDiv = document.createElement('div');
    topQuartersDiv.className = 'top-quarters';
    const quarter1Div = document.createElement('div');
    quarter1Div.className = 'quarter1';
    const img = document.createElement('img');
    img.src = invention.image;
    img.alt = invention.name;
    quarter1Div.appendChild(img);
    topQuartersDiv.appendChild(quarter1Div);

    const bottomQuartersDiv = document.createElement('div');
    bottomQuartersDiv.className = 'bottom-quarters';
    const quarter3Div = document.createElement('div');
    quarter3Div.className = 'quarter3';
    const p = document.createElement('p');
    p.textContent = invention.name;
    quarter3Div.appendChild(p);
    bottomQuartersDiv.appendChild(quarter3Div);

    rightDiv.appendChild(topQuartersDiv);
    rightDiv.appendChild(bottomQuartersDiv);

    container.appendChild(leftDiv);
    container.appendChild(rightDiv);

    return container;
}

const inventionContainer = document.getElementById('invention-container');
INVENTIONS.forEach(invention => {
    const card = createInventionCard(invention);
    inventionContainer.appendChild(card);
});