// script.js

document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("no-btn");

  noButton.addEventListener("mouseover", function () {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });

  document.getElementById("yes-btn").addEventListener("click", function () {
    alert("Yay! I knew you'd say yes! ❤");
  });
});
