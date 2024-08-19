let images = [
  "assets/dice-01.svg",
  "assets/dice-02.svg",
  "assets/dice-03.svg",
  "assets/dice-04.svg",
  "assets/dice-05.svg",
  "assets/dice-06.svg",
];

let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach((die) => {
    die.classList.add("shake");
  });

  const snd = new Audio("assets/sound.wav");
  snd.play()

  setTimeout(() => {
    dice.forEach((die) => {
      die.classList.remove("shake");
    });
    let dieOneVal = Math.floor(Math.random() * 6);
    let dieTwoVal = Math.floor(Math.random() * 6);
    document.querySelector("#die-1").setAttribute("src", images[dieOneVal]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoVal]);
  }, 1000);
}
