

// fait en js sans ajout de librairie
document.addEventListener('DOMContentLoaded', () => {

    function getWeeklyDates(year, month) {
        let weeks = [];
        let currentdate = new Date(year, month, 1);
        console.log(currentdate);

        // est-ce que la date n'est pas un lundi ?
        while (currentdate.getDay() !== 1) {
            //on ajoute un jour jusqu'à ce la date soit un lundi
            currentdate.setDate(currentdate.getDate() + 1);
        }
        console.log(currentdate);


        while (currentdate.getMonth() === month) {
            let week = [];

            // for (let i = 0; i < 7; i++) {
            //     week.push(new Date(date));
            //     date.setDate(date.getDate() +1);
            // }
            console.log("TB", currentdate);
            week.push(currentdate.toLocaleDateString('fr'));
            currentdate.setDate(currentdate.getDate() + 6);
            week.push(currentdate.toLocaleDateString('fr'));

            console.log(week);
            weeks.push(week);
            currentdate.setDate(currentdate.getDate() + 1)

        }

        return weeks;
    }



    const year = 2024;
    const month = 4;
    const weeklyDates = getWeeklyDates(year, month);
    console.log(weeklyDates);

    const semaineCells = document.querySelectorAll('.semaine');

    semaineCells.forEach((cell, index) => {
        if (index < weeklyDates.length) {
            const week = weeklyDates[index];
            const firstDay = week[0];
            const lastDay = week[1];

            cell.textContent = `${firstDay} au ${lastDay}`;
        }
    });


//     let weekDay = new Date("2024-05-06");
// let WEEKDAY_TH = document.querySelector(".jour th(:first-childe");

// WEEKDAY_TH.forEach(TH => {
//     TH.textContent = weekDay.toLocaleDateString('fr',{weekday :"long"
//     });
//     weekday.setDate(weekday.getDate()+1);
// });

});





















// partie js.js

// fait en js sans ajout de librairie
// document.addEventListener('DOMContentLoaded', () =>
   // Le code ici sera exécuté lorsque l'ensemble du DOM (Document Object Model) de la page HTML sera entièrement chargé et analysé par le navigateur. Donc toutes les balises HTML, y compris les balises de script, les images, les feuilles de style, etc., ont été complètement téléchargées et que le navigateur peut les manipuler.
{
    // Fonction pour obtenir les dates de chaque semaine pour un mois donné, du lundi au dimanche
    // function getWeeklyDates(year, month) 
    // function: C'est un mot-clé JavaScript utilisé pour déclarer une fonction.
    // getWeeklyDates: C'est le nom de la fonction. Les noms de fonction sont utilisés pour appeler la fonction et exécuter le code qu'elle contient.
    // (year, month): Ce sont les paramètres de la fonction. Les paramètres sont des variables qui acceptent les valeurs passées lors de l'appel de la fonction. Dans ce cas, la fonction getWeeklyDates accepte deux paramètres : year et month siter un peu plus bas.
    // {...}: C'est le corps de la fonction. Il contient le code qui sera exécuté lorsque la fonction est appelée. Dans ce cas, le code à l'intérieur de {...} est le code qui génère et retourne les dates des semaines pour un mois donné.
    // {
    //     let weeks = [];
    // let: mot-clé JavaScript utilisé pour déclarer une variable locale dans un bloc de code. Les variables déclarées avec let sont limitées à la portée du bloc dans lequel elles sont déclarées.
    // weeks: C'est le nom de la variable. Dans ce cas, la variable est nommée weeks,suggère qu'elle contiendra des données relatives aux semaines.
    // =[]: C'est la valeur initiale de la variable. Dans ce cas, la valeur initiale est un tableau vide ([]). Un tableau est une structure de données qui peut contenir plusieurs éléments. En attribuant un tableau vide à weeks, nous préparons cette variable à stocker des informations sur les semaines.
        // let date = new Date(year, month, 1); // Premier jour du mois
    // let: voir en haut
    // date: C'est le nom de la variable. Dans ce cas, la variable est nommée date, ce qui suggère qu'elle contiendra une date spécifique.
    // new Date(...): C'est la syntaxe pour créer une nouvelle instance de l'objet Date en JavaScript. L'objet Date représente une date et une heure dans JavaScript.
    // (year, month, 1): Ce sont les paramètres passés au constructeur Date. Year représente l'année, month représente le mois (numéroté de 0 à 11, où 0 correspond à janvier et 11 à décembre),  1 représente le jour du mois. Dans ce cas, nous créons une date pour le premier jour du mois spécifié (month) de l'année spécifiée (year).

        // Trouver le premier lundi du mois
        // while (date.getDay() !== 1) {
            // date.setDate(date.getDate() + 1);
        // }
        // while (...) { ... } : une structure de contrôle en JavaScript qui répète l'exécution d'un bloc de code tant que la condition entre parenthèses est évaluée comme vraie.
        // date.getDay() !== 1 : la condition de la boucle while. La méthode getDay() de l'objet Date renvoie le jour de la semaine pour la date spécifiée (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi). Cette condition vérifie si le jour de la semaine n'est pas lundi (1).
        // date.setDate(date.getDate() + 1) : le code à exécuter à chaque itération de la boucle. La méthode setDate() de l'objet Date définit le jour du mois de l'objet Date sur la valeur spécifiée. Dans ce cas, date.getDate() + 1 incrémente la date d'un jour à chaque itération, ce qui fait avancer la boucle d'un jour à la fois jusqu'à ce que le premier jour de la semaine soit un lundi.


        // Ajouter chaque semaine jusqu'à la fin du mois
        // while (date.getMonth() === month) 
        // while (...) { ... }: répète l'exécution d'un bloc de code tant que la condition entre parenthèses est évaluée comme vraie.
        // date.getMonth() === month: condition de la boucle while. Cette condition vérifie si le mois de la date correspond au mois spécifié.
        // {
            // let week = [];
            // for (let i = 0; i < 7; i++) {
                // week.push(new Date(date));
                // date.setDate(date.getDate() + 1);
            // }
            // let week = [];: nouvelle variable week qui est initialisée à un tableau vide à chaque itération de la boucle. Ce tableau contiendra les dates pour une semaine donnée.
            // for (let i = 0; i < 7; i++) { ... }: Cette boucle for est utilisée pour itérer sur les jours de la semaine. Elle commence à 0 et s'arrête à 6 (inclus) pour représenter les sept jours de la semaine.
            // week.push(new Date(date));: À chaque itération de la boucle for, une nouvelle instance de l'objet Date est créée avec la date actuelle (représentée par date), puis cette date est ajoutée au tableau week avec la méthode push().
            // date.setDate(date.getDate() + 1);: À chaque itération de la boucle for, la date est incrémentée d'un jour à l'aide de la méthode setDate(). Cela permet de passer au jour suivant dans la boucle.


            // weeks.push(week);
            // weeks.push(week);: Une fois que les sept jours de la semaine ont été ajoutés au tableau week, ce tableau est ajouté au tableau weeks, qui stocke les semaines complètes.
        }

        // return weeks;
        // return: Le mot-clé return en JavaScript est utilisé pour renvoyer une valeur à partir d'une fonction. Lorsqu'une fonction atteint une déclaration return, elle arrête son exécution et renvoie la valeur spécifiée.
        // weeks: C'est la variable qui contient les semaines générées par la fonction. Dans ce cas, weeks est un tableau contenant toutes les semaines du mois spécifié, avec chaque semaine représentée comme un tableau de dates.
    // }

    // Utiliser la fonction pour obtenir les dates de mai 2024
    // const year = 2024;
    // const month = 4; 
    // Mai (mois 0-indexé, donc 4 = mai)
    // const weeklyDates = getWeeklyDates(year, month);
    // getWeeklyDates(year, month): C'est un appel à la fonction getWeeklyDates() avec deux arguments : year et month. Cette fonction génère et retourne un tableau contenant les dates des semaines pour le mois et l'année spécifiés.
    // const: Le mot-clé const est utilisé pour déclarer une variable en JavaScript avec une valeur qui ne peut pas être réaffectée par la suite. Une fois qu'une valeur est assignée à une variable constante, elle ne peut pas être modifiée.
    // weeklyDates: C'est le nom de la variable qui stockera le résultat de l'appel de fonction. Dans ce cas, weeklyDates contiendra le tableau des dates des semaines.

    // Sélectionner les cellules où remplacer "Semaine X"
    // const semaineCells = document.querySelectorAll('.semaine');
    //const est utilisé pour déclarer une variable en JavaScript avec une valeur qui ne peut pas être réaffectée par la suite. Cependant, les objets et tableaux stockés dans une variable const peuvent toujours être modifiés. 
    // semaineCells: nom variable qui va contenir la liste des éléments sélectionnés. Dans ce cas, semaineCells est une NodeList (une sorte de tableau contenant des éléments DOM).
    // document: objet global qui représente le document HTML chargé dans le navigateur. Il fournit des méthodes pour accéder et manipuler le contenu du document.
    // querySelectorAll('.semaine'): querySelectorAll est une méthode de l'objet document qui renvoie une NodeList de tous les éléments correspondant au sélecteur CSS spécifié. Dans ce cas, le sélecteur .semaine sélectionne tous les éléments qui ont la classe CSS "semaine".

    // semaineCells.forEach((cell, index) => 
    // semaineCells: C'est la NodeList (un type de liste similaire à un tableau) qui contient tous les éléments du DOM avec la classe "semaine". Cette liste a été obtenue avec document.querySelectorAll('.semaine');.
    // forEach est une méthode disponible sur les NodeLists (et les tableaux) en JavaScript. Elle permet d'exécuter une fonction une fois pour chaque élément de la liste.
    // (cell, index) => { ... }: C'est une fonction fléchée (arrow function) qui est exécutée pour chaque élément de la NodeList. Cette fonction prend deux paramètres => cell: élément DOM courant de la NodeList sur lequel l'itération est en cours. Dans ce cas, il s'agit d'un élément avec la classe "semaine". => index: C'est l'index de l'élément courant dans la NodeList, commençant à 0 pour le premier élément, 1 pour le deuxième, etc.

    // {
        // if (index < weeklyDates.length) 
    // index actuel dans la boucle forEach, correspondant à la position de la cellule dans la liste semaineCells.
    // weeklyDates.length: longueur du tableau weeklyDates, c'est-à-dire le nombre de semaines générées.
    // Cette condition vérifie donc si l'index de l'élément actuel est valide par rapport au nombre de semaines disponibles. Cela évite les erreurs au cas où il y aurait plus de cellules que de semaines.
        // {
            // const week = weeklyDates[index];
            // weeklyDates[index]: Récupère la semaine (qui est un tableau de dates) à la position index dans le tableau weeklyDates.
            // const week: Déclare une nouvelle constante appelée week pour stocker cette semaine.
            // const firstDay = week[0].toLocaleDateString();
            // week[0]: Accède au premier jour de la semaine (lundi) dans le tableau week.
            // .toLocaleDateString(): Convertit cette date en une chaîne de caractères au format local (par exemple, "01/05/2024" pour le 1er mai 2024 en format français).
            // const firstDay: Déclare une nouvelle constante appelée firstDay pour stocker cette date formatée.
            // const lastDay = week[6].toLocaleDateString();
            // week[6]: Accède au dernier jour de la semaine (dimanche) dans le tableau week.
            // .toLocaleDateString(): Convertit cette date en une chaîne de caractères au format local.
            // const lastDay: Déclare une nouvelle constante appelée lastDay pour stocker cette date formatée.
            // cell.textContent = `Du ${firstDay} au ${lastDay}`;
            // cell: C'est l'élément DOM actuel de la boucle forEach, représentant une cellule avec la classe "semaine".
            // .textContent: Une propriété qui définit ou obtient le texte à l'intérieur de cet élément.
            // `${firstDay} - ${lastDay}`: Utilise une template string pour créer une chaîne de caractères qui combine firstDay et lastDay avec un tiret entre les deux, par exemple "01/05/2024 - 07/05/2024". (j'ai rajouter "du" et "au")
            // Cette ligne définit le contenu textuel de la cellule avec cette chaîne, affichant ainsi la plage de dates pour cette semaine.
        // }
    // });
// });
