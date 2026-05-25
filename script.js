/* ---------------- SLIDER ---------------- */

const slider = document.querySelector(".product-slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slider && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 380, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -380, behavior: "smooth" });
  });
}

/* ---------------- HOME PAGE IMAGE POPUP ---------------- */

let productIndex = 0;

const productImages = [
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

function openPopup(index) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");

  if (!popup || !img) return;

  productIndex = index;
  popup.style.display = "flex";
  img.src = productImages[productIndex];
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

function nextImage() {
  const img = document.getElementById("popup-img");

  productIndex = (productIndex + 1) % productImages.length;
  if (img) img.src = productImages[productIndex];
}

function prevImage() {
  const img = document.getElementById("popup-img");

  productIndex =
    (productIndex - 1 + productImages.length) % productImages.length;

  if (img) img.src = productImages[productIndex];
}

/* ---------------- PRODUCTS DATA (DETAIL PAGE) ---------------- */

const products = [
  {
    title: "Steel Stair Frame",
    image: "images/Product1.jpg",
    specs: "Steel frame with glass on top",
    desc: "Elegant stair case with sturdy steel frame and premium glass top."
  },
  {
    title: "Steel Kitchen Frame",
    image: "images/Product2.jpg",
    specs: "Heavy-duty steel kitchen structure",
    desc: "Modern kitchen frame designed for durability and smart storage."
  },
  {
    title: "Modular Kitchen",
    image: "images/Product3.jpg",
    specs: "Custom modular steel kitchen setup",
    desc: "Elegant modular kitchen solutions for modern homes."
  },
  {
    title: "TV Unit",
    image: "images/Product4.jpg",
    specs: "Steel TV unit frame design",
    desc: "Stylish TV unit structure made with premium steel."
  },
  {
    title: "Steel Wardrobe",
    image: "images/Product5.jpg",
    specs: "Spacious steel wardrobe design",
    desc: "Durable wardrobe with large storage capacity."
  },
  {
    title: "Steel Bed",
    image: "images/Product6.jpg",
    specs: "Strong steel bed structure",
    desc: "Premium steel bed designed for durability."
  },
  {
    title: "Dining Table",
    image: "images/Product7.jpg",
    specs: "Steel dining table set",
    desc: "Elegant dining table with modern steel finish."
  },
  {
    title: "Office Furniture",
    image: "images/Product8.jpg",
    specs: "Steel office setup",
    desc: "Professional office furniture with modern design."
  },
  {
    title: "Sofa Frame",
    image: "images/Product9.jpg",
    specs: "Steel sofa structure frame",
    desc: "Strong and stylish sofa frame for modern interiors."
  }
];

/* ---------------- PRODUCT DETAIL POPUP ---------------- */

function openProductPopup(index) {
  const popup = document.getElementById("popup");
  if (!popup) return;

  const product = products[index];

  popup.innerHTML = `
    <div class="popup-content">

      <span class="close-btn" onclick="closePopup()">&times;</span>

      <img src="${product.image}" alt="${product.title}">

      <h2>${product.title}</h2>

      <p><b>Specifications:</b> ${product.specs}</p>

      <p><b>Description:</b> ${product.desc}</p>

      <div class="popup-actions">
        <a href="contact.html">Get Detailed Quote</a>
        <button onclick="closePopup()">Close</button>
      </div>

    </div>
  `;

  popup.style.display = "flex";
}

/* ---------------- CLOSE POPUP ---------------- */

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

/* ---------------- OUTSIDE CLICK CLOSE ---------------- */

window.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");
  if (e.target === popup) closePopup();
});

/* ---------------- ESC KEY CLOSE ---------------- */

document.addEventListener("keydown", (e) => {
  const popup = document.getElementById("popup");

  if (popup && popup.style.display === "flex" && e.key === "Escape") {
    closePopup();
  }
});