const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  jump();
});

document.addEventListener("keyup", function (event) {
  down();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
}

function down() {
  if (dino.classList == "jump") {
    dino.classList.remove("jump");
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  console.log(dinoTop);
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left"),
  );
  console.log(cactusLeft);
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!!!");
  }
}, 10);
