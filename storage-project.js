const storeItem = () => {
  let selectValue = document.getElementById("items").value;
  let quantity = document.getElementById("quantity").value;
  localStorage.setItem(selectValue, quantity);
};
window.addEventListener("DOMContentLoaded", (event) => {
  let form = document.getElementsByClassName("form");
  form[0].addEventListener("submit", (event) => {
    event.preventDefault();

    storeItem();
  });

  // const showCart = () => {

  // };

  // const removeItem = () => {

  // };
});
