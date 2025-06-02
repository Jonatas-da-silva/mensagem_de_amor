function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 8 + Math.random() * 5 + "s";

  document.getElementById("background").appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 13000);
}

// Cria flores continuamente
setInterval(createFlower, 300);
