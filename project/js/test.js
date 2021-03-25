// Liste d'hebergements
var hotels = [
    {
        nom : "Auberge la Cannebière",
        ville : "Marseille",
        imgName : "marcus-loke-WQJvWU_HZFo-unsplash",
        prix : 25,
        note : 4
    },
    {
        nom : "Hôtel du port",
        ville : "Marseille",
        imgName : "fred-kleber-gTbaxaVLvsg-unsplash",
        prix : 52,
        note : 5
    },
    {
        nom : "Hôtel Les mouettes",
        ville : "Marseille",
        imgName : "reisetopia-B8WIgxA_PFU-unsplash",
        prix : 76,
        note : 4
    },
    {
        nom : "Hôtel de la mer",
        ville : "Marseille",
        imgName : "annie-spratt-Eg1qcIitAuA-unsplash",
        prix : 46,
        note : 3
    },
    {
        nom : "Auberge le Panier",
        ville : "Marseille",
        imgName : "nicate-lee-kT-ZyaiwBe0-unsplash",
        prix : 23,
        note : 4
    },
    {
        nom : "Hotel chez Amina",
        ville : "Marseille",
        imgName : "febrian-zakaria-M6S1WvfW68A-unsplash",
        prix : 96,
        note : 5
    },
    {
        nom : "Hotel Le solei du matin",
        ville : "Marseille",
        imgName : "emile-guillemot-Bj_rcSC5XfE-unsplash",
        prix : 128,
        note : 5
    },
    {
        nom : "Au coeur de l'eau Chambres d'hôtes",
        ville : "Marseille",
        imgName : "aw-creative-VGs8z60yT2c-unsplash",
        prix : 71,
        note : 4
    },
    {
        nom : "Hotel Tout bleu et Blanc",
        ville : "Marseille",
        imgName : "febrian-zakaria-sjvU0THccQA-unsplash",
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

const imgPath = "../imgs/hebergements/3_medium/"
const blue = "#0065FC";
const gray = "#D2D2D2";
const lightBlue = "#DEEBFF";
const lightGray = "#F2F2F2";

var hotelCurrentElt = document.querySelector(".hotels__cards");
var hotelMostPopElt = document.querySelector("#hotels--popular .hotels__cards");
hotelCurrentElt.innerHTML = "";
hotelMostPopElt.innerHTML = "";

populateHotels();
populateMostPopular();

// Injection des hotels dans l'UI
function populateHotels()
{
    for (var i=0; i<6; i++) hotelCurrentElt.appendChild(newHotelCard(hotels[i]));
}

// Injection des hotels les plus populaires
function populateMostPopular()
{
    for (var i=6; i<9;i++) hotelMostPopElt.appendChild(newHotelCard(hotels[i]));
}

// Injection des activités
function populateActivities()
{

}

function newHotelCard(hotelInfos)
{
    // Main container
    var hotelItemElt = document.createElement("a");
    hotelItemElt.className = "hotelItem animatedHighlight";
    hotelItemElt.href ="#";

    // Image
    var hotelImageElt = document.createElement("img");
    hotelImageElt.className = "hotelItem--img";
    hotelImageElt.setAttribute("alt", hotelInfos.nom);
    hotelImageElt.setAttribute("src", imgPath + hotelInfos.imgName + ".jpg");

    // Info section container
    var infoSectionElt = document.createElement("div");
    infoSectionElt.className = "hotelItem--infoSection";

    // Texts
    var titleElt = document.createElement("h3");
    titleElt.textContent = hotelInfos.nom;
    var infoElt = document.createElement("p");
    infoElt.innerHTML = "Nuit à partir de <strong>" + hotelInfos.prix + "€</strong>";

    // Stars container
    var starContainerElt = document.createElement("div");
    starContainerElt.className = "ratingStars";

    // Stars
    for (var i=0; i<5; i++)
    {
        var starElt = document.createElement("i");
        starElt.className = "fas fa-star fa-xs";
        if (i < hotelInfos.note) starElt.style.color = blue;
        else starElt.style.color = gray;
        starContainerElt.appendChild(starElt);
    }

    // Affecting Parents
    hotelItemElt.appendChild(hotelImageElt);
    hotelItemElt.appendChild(infoSectionElt);
    infoSectionElt.appendChild(titleElt);
    infoSectionElt.appendChild(infoElt);
    infoSectionElt.appendChild(starContainerElt);

    // Returning root Parent
    return hotelItemElt;

}

