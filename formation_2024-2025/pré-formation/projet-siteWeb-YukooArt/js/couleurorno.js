

let fullImgBox = document.getElementById("fullImgBox")
// fullImgBox est une variable qui contient une référence à l'élément HTML identifié par l'ID "fullImgBox". Elle permet d'accéder à cet élément
let fullImg = document.getElementById("fullImg")
// fullImg est une variable qui contient une référence à l'élément HTML identifié par l'ID "fullImg"

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
//function openFullImg(pic) : fonction nommée openFullImg. elle prend un paramètre appelé pic, qui est utilisé pour spécifier l'URL de l'image à afficher en plein écran. 
//fullImgBox.style.display = "flex";:   l'élément HTML représenté par fullImgBox sera affiché en utilisant le (flexbox).Permet de contrôler le positionnement et l'agencement des éléments à l'intérieur.
//fullImg.src = pic;: source de l'image contenue dans l'élément représenté par fullImg sera définie sur l'URL de l'image spécifiée par la variable pic. En d'autres termes, cela remplace l'image actuellement affichée par une nouvelle image spécifiée par pic.

function closeFullImg(){
    fullImgBox.style.display = "none";
}
// quand on click sur le X l'image se ferme

