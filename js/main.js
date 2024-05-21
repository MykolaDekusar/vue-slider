"use strict";

// const images = [
//   {
//     image: "img/01.webp",
//     title: "Marvel's Spiderman Miles Morale",
//     text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
//   },
//   {
//     image: "img/02.webp",
//     title: "Ratchet & Clank: Rift Apart",
//     text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
//   },
//   {
//     image: "img/03.webp",
//     title: "Fortnite",
//     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//   },
//   {
//     image: "img/04.webp",
//     title: "Stray",
//     text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
//   },
//   {
//     image: "img/05.webp",
//     title: "Marvel's Avengers",
//     text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//   },
// ];

// const items = document.querySelector(".items");
// const prevImg = document.querySelector(".prev");
// const nextImg = document.querySelector(".next");
// const thumbs = document.querySelector(".thumbs");
// let contatore = 0;
// let posNeg = true;

// //CREATION OF ELEMENT
// const div = document.createElement("div");
// div.classList.add("item", "active");
// div.innerHTML = `<img src="">`;
// items.append(div);

// //first image init
// const image = document.querySelector(".item img");
// image.src = images[contatore].image;

// prevImg.addEventListener("click", () => {
//   posNeg = false;
//   if (contatore === 0) contatore = 5;
//   contatore--;
//   thumbsActive(contatore);
//   image.src = images[contatore].image;
// });

// nextImg.addEventListener("click", () => {
//   posNeg = true;
//   contatore++;
//   if (contatore === 5) contatore = 0;
//   thumbsActive(contatore);
//   image.src = images[contatore].image;
// });

// //BONUS 1
// thumbs.addEventListener("click", (e) => {
//   const thumbValue = e.target.attributes[0].value;
//   thumbsSelector(thumbValue);
// });

// function thumbsSelector(imageNumber) {
//   switch (imageNumber) {
//     case "img/01.webp":
//       contatore = 0;
//       thumbsActive(contatore);

//       image.src = images[contatore].image;
//       break;
//     case "img/02.webp":
//       contatore = 1;
//       thumbsActive(contatore);

//       image.src = images[contatore].image;
//       break;
//     case "img/03.webp":
//       contatore = 2;
//       thumbsActive(contatore);

//       image.src = images[contatore].image;
//       break;
//     case "img/04.webp":
//       contatore = 3;
//       thumbsActive(contatore);

//       image.src = images[contatore].image;
//       break;
//     case "img/05.webp":
//       contatore = 4;
//       thumbsActive(contatore);

//       image.src = images[contatore].image;
//       break;
//   }
// }

// images.forEach(() => {
//   const div = document.createElement("div");
//   div.classList.add("thumb");
//   thumbs.append(div);
//   div.innerHTML += `<img src='${images[contatore].image}'>'`;
//   contatore++;
// });
// const selectedDiv = document.querySelectorAll(".thumb");
// //first thumb init
// contatore = 0;
// thumbsActive(contatore);

// function thumbsActive(contatore) {
//   for (let i = 0; i <= selectedDiv.length - 1; i++) {
//     selectedDiv[i].classList.remove("active");
//   }
//   selectedDiv[contatore].classList.add("active");
// }

// //BONUS 2
// let setTimer;
// function startCounter() {
//   setTimer = setInterval(timer, 1000);
//   function timer() {
//     if (posNeg === true) {
//       contatore++;
//       if (contatore === 5) contatore = 0;
//     }
//     if (posNeg === false) {
//       if (contatore === 0) contatore = 5;
//       contatore--;
//     }
//     image.src = images[contatore].image;
//     thumbsActive(contatore);
//   }
// }
// function stopCounter() {
//   clearInterval(setTimer);
// }
// //BONUS 3
// function reverse() {
//   if (posNeg === true) {
//     posNeg = false;
//     return;
//   }
//   if (posNeg === false) {
//     posNeg = true;
//     return;
//   }
// }

const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      currentIndex: 0,
      status: "active",
    };
  },
  //METHODS
  methods: {
    nextImg() {
      if (this.currentIndex < 5) this.currentIndex++;
      if (this.currentIndex === 5) this.currentIndex = 0;
    },
    prevImg() {
      if (this.currentIndex === 0) this.currentIndex = 5;
      if (this.currentIndex > 0) this.currentIndex--;
    },
    thumbImgIndex(index) {
      this.currentIndex = index;
      console.log(this.status);
    },
  },
}).mount("#app");
