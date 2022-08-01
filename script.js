const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scope = document.getElementById("scope");

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
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left"),
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!!!");
    scope.textContent = "0";
    dino.classList.remove("jump");
  }
}, 10);

let isScope = setInterval(function () {
  if (
    parseInt(window.getComputedStyle(cactus).getPropertyValue("left")) <= 50
  ) {
    scope.textContent++;
  }
}, 250);
