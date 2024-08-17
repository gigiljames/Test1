let scale = 1.0;
let increment = 0.85;
function realisation(page) {
  let message = "";
  if (page === "dumb") {
    message = "Sad Realisation!!";
  } else {
    message = "I love you too..!!";
  }
  let question = document.getElementsByTagName("h1")[0];
  question.innerHTML = message;
  yesButton = document.getElementById("yes-button");
  yesButton.style.transform = `scale(1)`;
}
function changePosition() {
  let top = Math.round(Math.random() * 100);
  let right = Math.round(Math.random() * 100);
  noButton = document.getElementById("no-button");
  noButton.style.top = `${top}%`;
  noButton.style.right = `${right}%`;
  yesButton = document.getElementById("yes-button");
  // yesButtonPadding = getComputedStyle(yesButton)
  //   .getPropertyValue("padding")
  //   .replace("px", "");
  // yesButtonPadding = Number(yesButtonPadding);
  // yesButton.style.padding = `${1.5 * yesButtonPadding}px`;
  yesButton.style.transform = `scale(${scale + increment})`;
  scale += increment;
}
