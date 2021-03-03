// Liste d'hebergements
var homes = [
    {
        nom : "Auberge la Cannebière",
        ville : "Marseille",
        imgUrl : "",
        prix : 25,
        note : 4
    },
    {
        nom : "Hôtel du port",
        ville : "Marseille",
        imgUrl : "",
        prix : 25,
        note : 5
    },
    {
        nom : "Hôtel Les mouettes",
        ville : "Marseille",
        imgUrl : "",
        prix : 76,
        note : 4
    },
    {
        nom : "Hôtel de la mer",
        ville : "Marseille",
        imgUrl : "",
        prix : 46,
        note : 3
    },
    {
        nom : "Auberge le Panier",
        ville : "Marseille",
        imgUrl : "",
        prix : 23,
        note : 4
    },
    {
        nom : "Hotel chez Amina",
        ville : "Marseille",
        imgUrl : "",
        prix : 96,
        note : 5
    },
    {
        nom : "Hotel Le solei du matin",
        ville : "Marseille",
        imgUrl : "",
        prix : 128,
        note : 5
    },
    {
        nom : "Au coeur de l'eau Chambres d'hôtes",
        ville : "Marseille",
        imgUrl : "",
        prix : 71,
        note : 4
    },
    {
        nom : "Hotel Tout bleu et Blanc",
        ville : "Marseille",
        imgUrl : "",
        prix : 68,
        note : 4
    }
];
// Liste d'activités
var activities = [
    {
        imgUrl : "",
        ville : "Marseille",
        nom : "Vieux Port"
        
    },
    {
        imgUrl : "",
        ville : "Marseille",
        nom : "Fort de Pomègues"
    },
    {
        imgUrl : "",
        ville : "Marseille",
        nom : "Îles du Frioul"
    },
    {
        imgUrl : "",
        ville : "Marseille",
        nom : "Parc National des Calanques",
    },
    {
        imgUrl : "",
        ville : "Marseille",
        nom : "Notre-Dame-de-la-Garde"
    },
    {
        imgUrl : "",
        ville : "Marseille",
        nom : "Parc Longchamp"
    }
];

var eltHeader = document.getElementById("header");


//#region Html presets
var desktopHeader = '<div class="headerDesktop">\
<div class="logoArea">\
    <img class="logo" src="../imgs/logo/Reservia.svg" alt="logo reservia">\
</div>\
<div class="headerMenuArea">\
    <a href="#" class="headerMenuItem">Hébergements</a>\
    <a href="#" class="headerMenuItem">Activités</a>\
    <a href="#" class="headerMenuItem">S\'inscrire</a>\
</div>\
</div>';

var mobileHeader = '<div class="headerDesktop">\
<div class="logoArea">\
    <img class="logo" src="../imgs/logo/Reservia.svg" alt="logo reservia">\
</div>\
<div class="headerMenuArea">\
    <a href="#" class="headerMenuItem">S\'inscrire</a>\
</div>\
</div>\
<div>\
<div class="headerMobileMenu">\
    <a href="#" class="headerMobileItem">Hébergements</a>\
    <a href="#" class="headerMobileItem">Activités</a>\
</div>\
</div>';

//#endregion 

// Modification de l'UI desktop --> Mobile
// Variable vraie si condition >= et fausse si <
const mediaQuery = window.matchMedia('(max-width: 800px)')
mediaQuery.addListener(switchUI);

function switchUI(){
    if (mediaQuery.matches) { // Version Mobile
      eltHeader.innerHTML = mobileHeader;

      /* Debug
      document.body.style.backgroundColor = "yellow";
      console.error("Mobile");
      */
    } 
    else {  // Version Bureau
      eltHeader.innerHTML = desktopHeader;
      /* Debug
      console.error("Desktop");
      document.body.style.backgroundColor = "pink";
      */
    }
}





// Injection des hotels
function populateHomes(){

}

// Injection des hotels les plus populaires
function populateMostPopular(){

}

// Injection des activités
function populateActivities(){

}

