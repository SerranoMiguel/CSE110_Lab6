// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
    //.then(response => localStorage.setItem('products', JSON.stringify(response)));
  //Create a fetch request to this site: https://fakestoreapi.com/products
  // This should return an array of JavaScript objects. Be careful - fetch is asynchronous
  // add the array to local storage
  //localStorage.setItem('products', JSON.stringify(response));
  // says data is not defined
  // is data an issue?
});
