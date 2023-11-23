const moreDetailsButtons = document.querySelectorAll(".more-details-button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

moreDetailsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function showAlertwithSound() {
  alert(
    "Welcome to the Radiant Elegance! Use our services today and get a discount."
  );
  var audio = new Audio("sounds/light-hearted-message-tone.mp3");
  audio.play();
}

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    var audio = new Audio("sounds/light-hearted-message-tone.mp3");
    audio.play();
  }
  console.log("defrgb");
});     


let image = document.getElementById("logomain");

function changeOpacity() {
  image.style.opacity = "0.5";
}

function resetOpacity() {
  image.style.opacity = "1";
}

image.addEventListener("mouseover", changeOpacity);
image.addEventListener("mouseout", resetOpacity);

