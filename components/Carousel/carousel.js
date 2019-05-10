
let i = 0; 			// Start Point
const images = [];	// Images Array
const time = 1000;	// Time Between Switch

images[0] = "http://lorempixel.com/400/200/animals";
images[1] = "http://lorempixel.com/400/200/sports";
images[2] = "http://lorempixel.com/400/200/food";


const animal = document.querySelector('.animal');
const sport = document.querySelector('.sport');
const food = document.querySelector('.food');
const random = document.querySelector('.random');

animal.addEventListener('click', () => {
  document.slide.src = images[0];
});

sport.addEventListener('click', () => {
  document.slide.src = images[1];
});

food.addEventListener('click', () => {
  document.slide.src = images[2];
});


random.addEventListener('click', () => {
 changeImg();
});


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}


