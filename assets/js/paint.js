function configureListeners() {
  let images = document.getElementsByTagName("img"); // select img elements

  for (var i = 0; i < images.length; i++) {
    document
      .getElementById(images[i].id)
      .addEventListener("mouseout", removeOpacity, false);
    document
      .getElementById(images[i].id)
      .addEventListener("mouseover", addOpacity, false);

    // iterate over images and add mouseover event listeners
  }
}

function addOpacity(event) {
  if (!this.classList.contains("dim")) {
    this.classList.add("dim");
  }
  // add appropriate CSS class
  getProductInfo(event.target.id);
}

function removeOpacity(event) {
  //remove appropriate CSS class
  if (this.classList.contains("dim")) {
    this.classList.remove("dim");
  }
  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
}

function getProductInfo(paintColor) {
  let price;
  let colorName;

  switch (paintColor) {
    case "pn1":
      // set variables for price and color name and invoke a function to update the price
      price = "29.99";
      colorName = "super light blue";
      updatePrice(colorName, price);
      break;
    case "pn2":
      // set variables for price and color name and invoke a function to update the price
      price = "39.99";
      colorName = "brown";
      updatePrice(colorName, price);
      break;
    case "pn3":
      // set variables for price and color name and invoke a function to update the price
      price = "49.99";
      colorName = "blue";
      updatePrice(colorName, price);
      break;
    case "pn4":
      // set variables for price and color name and invoke a function to update the price
      price = "59.99";
      colorName = "red";
      updatePrice(colorName, price);
      break;
    case "pn5":
      // set variables for price and color name and invoke a function to update the price
      price = "69.99";
      colorName = "white";
      updatePrice(colorName, price);
      break;
    case "pn6":
      // set variables for price and color name and invoke a function to update the price
      price = "79.99";
      colorName = "black";
      updatePrice(colorName, price);
      break;
    case "pn7":
      // set variables for price and color name and invoke a function to update the price
      price = "89.99";
      colorName = "light blue";
      updatePrice(colorName, price);
      break;
    case "pn8":
      // set variables for price and color name and invoke a function to update the price
      price = "99.99";
      colorName = "purple";
      updatePrice(colorName, price);
      break;
    case "pn9":
      // set variables for price and color name and invoke a function to update the price
      price = "109.99";
      colorName = "yellow";
      updatePrice(colorName, price);
      break;
    default:
  }

  function updatePrice(colorName, price) {
    let colorPrice = document.getElementById("color-price"); // select element with corresponding id
    // display price
    colorPrice.textContent = price;
    let color = document.getElementById("color-name"); // select element with corresponding id
    //display color name
    color.textContent = colorName;
  }
}
