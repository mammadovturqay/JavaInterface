function createProductCard(productName, price, imageUrl) {
  var productCard = document.createElement("div");
  productCard.classList.add("product-card");

  var img = document.createElement("img");
  img.src = imageUrl;
  productCard.appendChild(img);

  var name = document.createElement("h2");
  name.textContent = productName;
  productCard.appendChild(name);

  var priceElem = document.createElement("p");
  priceElem.textContent = "Price: " + price;
  productCard.appendChild(priceElem);

  return productCard;
}

function createCommentMessage(author, message, timestamp) {
  var commentMessage = document.createElement("div");
  commentMessage.classList.add("comment-message");

  var authorElem = document.createElement("p");
  authorElem.textContent = "Author: " + author;
  commentMessage.appendChild(authorElem);

  var messageElem = document.createElement("p");
  messageElem.textContent = "Message: " + message;
  commentMessage.appendChild(messageElem);

  var timestampElem = document.createElement("p");
  timestampElem.textContent = "Timestamp: " + timestamp;
  commentMessage.appendChild(timestampElem);

  return commentMessage;
}

function createMenuItem(name, price, description) {
  var menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  var nameElem = document.createElement("h2");
  nameElem.textContent = name;
  menuItem.appendChild(nameElem);

  var priceElem = document.createElement("p");
  priceElem.textContent = "Price: " + price;
  menuItem.appendChild(priceElem);

  var descElem = document.createElement("p");
  descElem.textContent = "Description: " + description;
  menuItem.appendChild(descElem);

  return menuItem;
}

var productContainer = document.getElementById("productContainer");
var commentContainer = document.getElementById("commentContainer");
var menuContainer = document.getElementById("menuContainer");

var productCard = createProductCard("Pizza", "$10", "image/pizza.jpeg");
productContainer.appendChild(productCard);

var commentMessage = createCommentMessage(
  "User",
  "This is a comment.",
  "2024-05-07 10:00"
);

commentContainer.appendChild(commentMessage);

var menuItem = createMenuItem(
  "Pizza",
  "$12",
  "Delicious pizza with assorted toppings."
);
menuContainer.appendChild(menuItem);

var productContainer = document.getElementById("productContainer");
var commentContainer = document.getElementById("commentContainer");
var menuContainer = document.getElementById("menuContainer");

var productCard = createProductCard("Pizza", "$10", "image/pizza.jpeg");
productContainer.appendChild(productCard);

var commentMessage = createCommentMessage(
  "User",
  "This is a comment.",
  "2024-05-07 10:00"
);
commentContainer.appendChild(commentMessage);

var menuItem = createMenuItem(
  "Pizza",
  "$12",
  "Delicious pizza with assorted toppings."
);
menuContainer.appendChild(menuItem);
