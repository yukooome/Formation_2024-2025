/* quand on click sur le boutton,on aura le dropdown qui s'affiche */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  //function myFunction() : est définie pour effectuer une action lorsque l'événement se produit. elle modifie les classes CSS d'un élément avec l'ID "myDropdown" en alternant l'ajout ou la suppression de la classe "show". Cela peut être utilisé pour afficher ou masquer un élément
  
  // pour fermer le dropdown il faut recliker
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
//window.onclick : gestionnaire d'événements à l'événement "click"
//function(event) : Lorsque clique n'importe où sur la fenêtre, cette fonction est déclenchée.
//if (!event.target.matches('.dropbtn')):  vérifie si l'élément sur lequel l'utilisateur a cliqué (représenté par event.target) ne correspond pas à un élément avec la classe CSS "dropbtn". 
      let i; // variable nommée "i", pas de valeur initiale, elle reste donc indéfinie (undefined) jusqu'à ce qu'une valeur lui soit affectée ultérieurement.
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// for : boucle pour liste d'éléments
// "i = 0;" : Cela met la variable "i" à zéro. En général, "i" est utilisé comme compteur pour parcourir les éléments d'un tableau.
// "i < dropdowns.length;" :  Cela signifie que la boucle continuera tant que la valeur de "i" est inférieure à la longueur du tableau "dropdowns".
// "i++" : augmente la valeur de "i" de 1 à chaque passage dans la boucle, permettant ainsi de passer à l'élément suivant du tableau à chaque itération.
// let openDropdown = dropdowns[i]; signifie qu'elle crée une variable appelée "openDropdown" et lui assigne la valeur de l'élément de tableau situé à l'index "i" dans le tableau "dropdowns".
// if (openDropdown.classList.contains('show')) : vérifie si la classe 'show' est présente dans la liste des classes de l'élément référencé par la variable "openDropdown".
// openDropdown.classList.remove('show') : supprime la classe CSS 'show' de l'élément 
// une boucle permet de repeter une condition tant quelle est vrai