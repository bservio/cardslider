const reviews = [
  {
    id: 1,
    name: "Bruno Sérvio",
    job: "Estagiário",
    img: "/assets/img/img1.jpg",
    text: "Dui interdum mauris ultricies diam purus quam metus integer, sollicitudin dolor pellentesque pharetra cursus quis massa lacus, odio risus suscipit ante gravida adipiscing imperdiet. adipiscing aenean curabitur quisque iaculis blandit vel dictumst suscipit at mauris adipiscing tortor porttitor, at neque lectus sagittis imperdiet vivamus etiam nunc orci magna semper ultricies. ",
  },

  {
    id: 2,
    name: "Isadora Soares",
    job: "Advogada",
    img: "/assets/img/img2.jpg",
    text: "Aliquam posuere vehicula eu facilisis sociosqu dapibus potenti phasellus, rutrum lacinia proin porttitor litora velit aliquet, dui odio interdum rhoncus viverra enim massa. varius rutrum orci fringilla a feugiat netus lacus, felis platea curae ullamcorper facilisis sollicitudin, sodales mauris cubilia fusce in dictum. platea pharetra nisi etiam ut, nulla laoreet.",
  },
  {
    id: 3,
    name: "Olívia Maria",
    job: "Come&Dorme",
    img: "/assets/img/img3.jpg",
    text: "...prrr.. meow meow meow meow meow meow",
  },
];

const img = document.querySelector("img");
const author = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

//Buttons

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

const showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
