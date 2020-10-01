const storeItem = () => {
  let selectValue = document.getElementById("items").value;
  let quantity = document.getElementById("quantity").value;
  localStorage.setItem(selectValue, quantity);
};

const showCart = () => {
  const cart = document.getElementById("shopping-cart");

  for (i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);

    const value = localStorage.getItem(key)

    let shoppingCart = document.createElement("div");

    shoppingCart.innerHTML = key + ": " + value;

    cart.appendChild(shoppingCart);
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  let form = document.getElementsByClassName("form");
  form[0].addEventListener("submit", (event) => {
    event.preventDefault();

    storeItem();
    showCart();
  });



  // const removeItem = () => {

  // };
});
