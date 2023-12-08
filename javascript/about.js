let cardImages = document.querySelectorAll(".card-image");
let cardTitles = document.querySelectorAll(".card-title");
let cardDescriptions = document.querySelectorAll(".card-description");
let cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
let cardImgs = document.querySelectorAll(".card-image img");
let cardTitleSpans = document.querySelectorAll(".card-title span");
let cardDescSpans = document.querySelectorAll(".card-description span");
let mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

let renderCard = () => {
  //Remove the skeleton loading effect
  cardImages.forEach((cardImage) => {
    cardImage.classList.remove("loading");
  });
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove("loading");
  });
  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.remove("loading");
  });
  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.remove("loading");
  });

  //Show the hidden html elements
  cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });
  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });
  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });
  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });
}

//Execute renderCard on setTimeout
setTimeout(() => {
  renderCard();
}, 1000);

//============= SPINNER =============\\
