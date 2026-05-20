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

  "images/Product1.jpg",
  "images/Product2.jpg",
  "images/Product3.jpg",
  "images/Product4.jpg",
  "images/Product5.jpg",
  "images/Product6.jpg",
  "images/Product7.jpg",
  "images/Product8.jpg",
  "images/Product9.jpg"

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