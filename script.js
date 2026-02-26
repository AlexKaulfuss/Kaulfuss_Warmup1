let sceneNumber = 1;

let image = document.getElementById("forestImage");
let caption = document.getElementById("caption");
let button = document.getElementById("nextButton");
let endMessage = document.getElementById("endMessage");

function advanceScene() {

  if (sceneNumber === 1) {
    image.src = "images/forest2.jpg";
    caption.textContent =
      "You move deeper in. The trees close around you. The light grows thin.";
    sceneNumber++;

  } else if (sceneNumber === 2) {
    image.src = "images/forest3.jpg";
    caption.textContent =
      "You have reached the heart of the forest. It is very quiet here.";
    sceneNumber++;

  } else if (sceneNumber === 3) {
    caption.textContent =
      "There is nowhere left to go. You sit down among the roots and listen to the forest.";
    sceneNumber++;

  } else if (sceneNumber === 4) {
    button.disabled = true;
  }
}

button.addEventListener("click", advanceScene);