const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables globales
let indexCourant = 0 ; // Stock l'index de pagination du slide

let divDots = document.querySelector(".dots") // Récupère la classe .dots

const nbrSlides = slides.length // compte le nbr d'éléments du tableau

let imageSlide = document.querySelector(".banner-img"); // Récupère l'image du slide

let baliseTitreBanniere = document.getElementById("titreBanniere"); // Récupère la balise <p> du slide



// Fonctions

function changeSlide () { // Permet de mettre à jour le slider 
	console.log (indexCourant)
	constructionBullet()
	// Permet de parcourir le tableau et de changer l'image et le texte du tableau :
	imageSlide.src = "./assets/images/slideshow/" + slides[indexCourant].image // Modifie l'attribut src de l'image
	baliseTitreBanniere.innerHTML = slides[indexCourant].tagLine // Insère tagLine du tableau dans la balise <p>
}


//

function constructionBullet () {
	divDots.innerHTML=`` //Réinitialise le html div dots 
	for (let i = 0; i<nbrSlides; i++) {
		if (i==indexCourant){
			divDots.innerHTML = divDots.innerHTML + `<div class="dot dot_selected"></div>`; // Insert code html
		}
		else {
			divDots.innerHTML = divDots.innerHTML + `<div class="dot"></div>`; // Insert code html
		}
	}
}

// récupére l'élément flèche gauche dans mon html et ajoute un évènement

let buttonArrowLeft = document.querySelector(".arrow_left");
buttonArrowLeft.addEventListener("click", () => {
	indexCourant--
	//condition pour que le carrousel tourne en boucle
	if (indexCourant<0) {
		indexCourant=nbrSlides-1
	}
	changeSlide() // Mets a jour le slide
});


// récupére l'élément flèche droite dans mon html et ajoute un évènement

let buttonArrowRight = document.querySelector(".arrow_right");
buttonArrowRight.addEventListener("click", () => {
	indexCourant++
	//condition pour que le caroussel tourne en boucle
	if (indexCourant>=nbrSlides) {
		indexCourant=0
	}
	changeSlide() // // Mets a jour le slide
});



// Construction de la page

constructionBullet () // Ajoute les bullet points/pagination au slider dans le DOM à l'affichage de la page
