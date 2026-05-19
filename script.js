const slider = document.querySelector(".product-slider");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {

  slider.scrollBy({
    left:380,
    behavior:"smooth"
  });

});

prevBtn.addEventListener("click", () => {

  slider.scrollBy({
    left:-380,
    behavior:"smooth"
  });

});


const images = [

  "images/product1.jpg",
  "images/product2.jpg",
  "images/product3.jpg",
  "images/product4.jpg",
  "images/product5.jpg",
  "images/product6.jpg",
  "images/product7.jpg",
  "images/product8.jpg",
  "images/product9.jpg"

];

let currentIndex = 0;

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");


function openPopup(index){

  currentIndex = index;

  popup.style.display = "flex";

  popupImg.src = images[currentIndex];

}

function closePopup(){

  popup.style.display = "none";

}


function nextImage(){

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  popupImg.src = images[currentIndex];

}

function prevImage(){

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  popupImg.src = images[currentIndex];

}



document.addEventListener("keydown", function(e){

  if(popup.style.display === "flex"){

    if(e.key === "ArrowRight"){

      nextImage();

    }

    else if(e.key === "ArrowLeft"){

      prevImage();

    }

    else if(e.key === "Escape"){

      closePopup();

    }

  }

});