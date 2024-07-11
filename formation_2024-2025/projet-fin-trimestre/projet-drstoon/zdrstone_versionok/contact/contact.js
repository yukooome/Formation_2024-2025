document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // function(event) : réagir à des événements déclenchés dans le navigateur
    // permet de récupérer un élément HTML à partir de son ID
    // addEventListener() :  permet de détecter quand un événement se produit sur un élément HTML
    // preventDefault() : empeche comportement par defaut
    
    // Récupération des valeurs des champs
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let newsletter = document.getElementById("newsletter").checked;
    // let : declanche une variable
    // ex : document.getElementById("nom").value => récupérer la valeur associée à l'élément HTML ayant l'identifiant "nom", cette valeur est utilisé pour effectuer différentes opérations ou traitements.
    //ex : let newsletter = document.getElementById("newsletter").checked =>  récupérer case à cocher associée à l'élément HTML ayant l'identifiant "newsletter". Contiendra la valeur booléenne true si la case à cocher est cochée, et false si elle n'est pas cochée.
    
    // Vérification du nom
    let nomRegex = /^[a-zA-Z\s]+$/; // Autorise les lettres (minuscules ou majuscules) et les espaces
    if (!nomRegex.test(nom)) {
        alert("Le champ Nom ne doit contenir que des lettres et des espaces.");
        return;
    }
    
    // Vérification du prénom
    let prenomRegex = /^[a-zA-Z\s]+$/; // Autorise les lettres (minuscules ou majuscules) et les espaces
    if (!prenomRegex.test(prenom)) {
        alert("Le champ Prénom ne doit contenir que des lettres et des espaces.");
        return;
    }
    
    // Vérification de l'email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    // Expression régulière pour une adresse email valide
// ^ : correspondance doit commencer au début de la chaîne.
// [^\s@]+ : un ou plusieurs caractères qui ne sont ni des espaces (\s) ni des symboles @.
// @ : Représente symbole "@".
// \. : Correspond à un point dans l'adresse e-mail. Comme le point a une signification spéciale en expression régulière, il est précédé d'un \ pour l'identifier.
// [^\s@]+ : Cela signifie un ou plusieurs caractères qui ne sont ni des espaces ni des symboles "@", suivis de la fin de la chaîne $.
    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }
    
    // Création de l'objet JSON avec les données du formulaire
    let formData = {
        nom: nom,
        prenom: prenom,
        email: email,
        message: message, 
        newsletter: newsletter
    };
    //let formData: nouvelle variable nommée formData,utilisée pour stocker des données provenant d'un formulaire HTML
    
    // Envoi des données à votre serveur ou traitement en JavaScript
    console.log(formData); // Pour afficher les données dans la console du navigateur
    
    // Réinitialisation du formulaire après l'envoi
    document.getElementById("contactForm").reset();
    alert("nom : " + nom + "\n" + "prenom : " + prenom + "\n" + "email : " + email + "\n" + "message : " + message)
});


//   menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);