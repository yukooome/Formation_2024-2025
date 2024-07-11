document.getElementById("ajouterTache").addEventListener("click", function ()
// document.getElementById("ajouterTache"): code récupère l'élément HTML avec l'ID "ajouterTache" dans le document. Cet élément doit avoir un attribut id correspondant pour être sélectionné de cette manière.
// .addEventListener("click", function() { ... }): Cette méthode ajoute un écouteur d'événements à l'élément sélectionné. L'événement est "click", ce qui signifie que la fonction spécifiée sera exécutée lorsque cet élément est cliqué. La deuxième partie de la méthode est une fonction anonyme qui contient le code à exécuter lorsque l'événement se produit. Lorsque l'élément avec l'ID "ajouterTache" est cliqué, la fonction spécifiée sera exécutée.
{
    let nom = document.getElementById("nom").value;
    // document.getElementById("nom"): code récupère l'élément HTML avec l'ID "nom" dans le document. Cet élément doit avoir un attribut id correspondant pour être sélectionné de cette manière.
    let description = document.getElementById("message").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let nomPersonne = document.getElementById("NomPersonne").value;

    if (!nom) {
        alert("Le nom est requis.");
        return;
    }

    if (!startDate) {
        alert("La date de début est requise.");
        return;
    }

    if (endDate && endDate < startDate)
    // Existence de la date de fin (endDate):première partie de la condition (endDate) vérifie que la variable endDate contient une valeur (c'est-à-dire, qu'elle n'est pas null, undefined, ou une valeur équivalente à false).
    // Comparaison des dates (endDate < startDate):deuxième partie de la condition (endDate < startDate) vérifie que la date de fin (endDate) est antérieure à la date de début (startDate).
    {
        alert("La date de fin ne peut pas être antérieure à la date de début !");
        return;
    }


    let tacheUrgente = document.getElementById("newsletter").checked ? "Oui" : "Non";
    // document.getElementById("newsletter").checked: code récupère l'élément HTML avec l'ID "newsletter" dans le document et vérifie si la case à cocher est cochée (true) ou non cochée (false). La propriété .checked renvoie true si la case à cocher est cochée et false sinon.


    // Création du récapitulatif des valeurs
    let recapitulatif = "Récapitulatif :\n\n";
    // let recapitulatif = "Récapitulatif :\n\n";: Initialise la chaîne de caractères recapitulatif avec le texte "Récapitulatif :" suivi de deux sauts de ligne (pour commencer une nouvelle ligne).
    recapitulatif += "Nom : " + nom + "\n";
    // recapitulatif += "Nom : " + nom + "\n";: Ajoute à la chaîne recapitulatif une ligne contenant le texte "Nom : " suivi de la valeur de la variable nom (qui contient le nom saisi dans le formulaire), puis un saut de ligne
    recapitulatif += "Description : " + description + "\n";
    // recapitulatif += "Description : " + description + "\n";: Ajoute une ligne contenant le texte "Description : " suivi de la valeur de la variable description (qui contient la description saisie dans le formulaire), puis un saut de ligne.
    recapitulatif += "Date de début : " + startDate + "\n";
    // recapitulatif += "Date de début : " + startDate + "\n";: Ajoute une ligne contenant le texte "Date de début : " suivi de la valeur de la variable startDate (qui contient la date de début saisie dans le formulaire), puis un saut de ligne.
    recapitulatif += "Date de fin : " + endDate + "\n";
    // recapitulatif += "Date de fin : " + endDate + "\n";: Ajoute une ligne contenant le texte "Date de fin : " suivi de la valeur de la variable endDate (qui contient la date de fin saisie dans le formulaire), puis un saut de ligne.
    recapitulatif += "Assigné à : " + nomPersonne + "\n";
    // recapitulatif += "Assigné à : " + nomPersonne + "\n";: Ajoute une ligne contenant le texte "Assigné à : " suivi de la valeur de la variable nomPersonne (qui contient la personne assignée saisie dans le formulaire), puis un saut de ligne.
    recapitulatif += "Tâche urgente : " + tacheUrgente;
    // recapitulatif += "Tâche urgente : " + tacheUrgente;: Ajoute une ligne contenant le texte "Tâche urgente : " suivi de la valeur de la variable tacheUrgente (qui contient "Oui" ou "Non" en fonction de si la case à cocher est cochée), sans saut de ligne à la fin.

    // Affichage du récapitulatif dans une popup
    alert(recapitulatif);

    let tableBody = document.getElementById("tableBody");
    // document.getElementById("tableBody"): code récupère l'élément HTML avec l'ID "tableBody" dans le document. Cet élément peut être une balise <tbody> ou tout autre élément avec cet identifiant.
    // let tableBody = ...: Cette syntaxe déclare une nouvelle variable tableBody en utilisant le mot-clé let. La valeur récupérée de l'élément HTML avec l'ID "tableBody" est ensuite assignée à cette variable. Après cette ligne de code, la variable tableBody contiendra une référence à l'élément HTML avec l'ID "tableBody", ce qui permettra de manipuler cet élément dans le reste du code JavaScript.


    let newRow = tableBody.insertRow();  // let newRow = tableBody.insertRow();: code crée une nouvelle ligne (<tr>) dans le tableau HTML représenté par l'élément tableBody et assigne cette nouvelle ligne à la variable newRow.
    
    // newRow.innerHTML = "<td>" + nom + "</td>" +
    //     // "<td>" + description + "</td>" +
    //     "<td>" + startDate + "</td>" +
    //     "<td>" + endDate + "</td>" +
    //     "<td>" + nomPersonne + "</td>" +
    //     "<td>" + tacheUrgente + "</td>";
    // newRow.style.color = tacheUrgente === "Oui" ? "red" : "#634e35";

    newRow.innerHTML = "<td>" + nom + "</td>" +
        // "<td>" + description + "</td>" +
        "<td>" + startDate + "</td>" +
        "<td>" + endDate + "</td>" +
        "<td>" + nomPersonne + "</td>" +
        "<td>" + tacheUrgente + "</td>";
    newRow.classList.add( (tacheUrgente === 'Oui') ? 'urgent' : '' )



});