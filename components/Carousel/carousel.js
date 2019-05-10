
const images = [];	

images[0] = "http://lorempixel.com/400/200/animals";
images[1] = "http://lorempixel.com/400/200/sports";
images[2] = "http://lorempixel.com/400/200/food";


const animal = document.querySelector('.animal');
const sport = document.querySelector('.sport');
const food = document.querySelector('.food');

animal.addEventListener('click', () => {
  document.slide.src = images[0];
});

sport.addEventListener('click', () => {
  document.slide.src = images[1];
});

food.addEventListener('click', () => {
  document.slide.src = images[2];
});



