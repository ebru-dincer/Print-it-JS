const slides = [
	{
		slidesName:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		slidesName:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		slidesName:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		slidesName:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let indexSlide = 0;

const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", () => {
	indexSlide--
	if (indexSlide < 0) {
		indexSlide = slides.length - 1;
	}
	image.setAttribute("src", `./assets/images/slideshow/${slides[indexSlide].slidesName}`);
	tagLine.innerHTML = slides[indexSlide].tagLine;
	changeDots ();
});

const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", () => {
	indexSlide++
	if (indexSlide == slides.length) {
		indexSlide = 0;
	}
	image.setAttribute("src", `./assets/images/slideshow/${slides[indexSlide].slidesName}`);
	tagLine.innerHTML = slides[indexSlide].tagLine;
	changeDots ();

});

function changeDots () {
	const dots = document.querySelectorAll(".dot");
	dots.forEach (dot => {
		dot.classList.remove("dot_selected")
	} );
	dots[indexSlide].classList.add("dot_selected");
};



