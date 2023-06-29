"use strict";

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {
  const productNames = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "water-can",
    "wine-glass",
  ];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === "sweep") {
      this.allProducts.push(new Product(productNames[i], "png"));
    } else {
      this.allProducts.push(new Product(productNames[i]));
    }
  }
};

AppState.prototype.saveToLocalStorage = function () {
  const savedData = JSON.stringify(this.allProducts);
  localStorage.setItem("products", savedData);
};

AppState.prototype.loadItems = function () {
  const savedData = localStorage.getItem("products");
  if (savedData) {
    this.allProducts = JSON.parse(savedData);
  } else {
    this.instantiateProducts();
  }

  this.instantiateProducts();
};

function Product(name, fileExtension = "jpg") {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
