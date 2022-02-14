var mainblock = document.querySelector("main");

// my works box
var buttonPrevius = document.querySelector("#workprev");
var buttonNext = document.querySelector("#worknext");
var workImage = document.querySelector("#workimage");
var workLink = document.querySelector("#workimagelink");

var workExamplesImages = [
  "index.files/workexample1.gif",
  "index.files/workexample2.gif",
  "index.files/workexample3.gif",
  "index.files/workexample4.gif",
  "index.files/workexample5.gif",
];

var workExamplesLinks = [
  "Works/JS_Сlock/index.html",
  "Works/JS_Pratice/index.html",
  "Works/JS_ToDo/index.html",
  "Works/JS_Galaxy/index.html",
  "Works/JS_Moving_Objects/index.html",
];

var imageIndex = 0;
var imageLinkIndex = 0;
workImage.src = `${workExamplesImages[0]}`;
workLink.href = `${workExamplesLinks[0]}`;

buttonNext.addEventListener("click", function slider() {
  imageIndex++;
  imageLinkIndex++;

  if (imageIndex > workExamplesImages.length - 1) {
    imageIndex = 0;
  }

  if (imageLinkIndex > workExamplesLinks.length - 1) {
    imageLinkIndex = 0;
  }

  workImage.src = `${workExamplesImages[imageIndex]}`;
  workLink.href = `${workExamplesLinks[imageLinkIndex]}`;
});

buttonPrevius.addEventListener("click", function slider() {
  imageIndex--;
  imageLinkIndex--;

  if (imageIndex < 0) {
    imageIndex = workExamplesImages.length - 1;
  }

  if (imageLinkIndex < 0) {
    imageLinkIndex = workExamplesLinks.length - 1;
  }

  workImage.src = `${workExamplesImages[imageIndex]}`;
  workLink.href = `${workExamplesLinks[imageLinkIndex]}`;
});

function sliderOnTimeChange() {
  imageIndex++;
  imageLinkIndex++;

  if (imageIndex > workExamplesImages.length - 1) {
    imageIndex = 0;
  }

  if (imageLinkIndex > workExamplesLinks.length - 1) {
    imageLinkIndex = 0;
  }

  workImage.src = `${workExamplesImages[imageIndex]}`;
  workLink.href = `${workExamplesLinks[imageLinkIndex]}`;
}

setInterval(sliderOnTimeChange, 35000);
// my works box

function mainBlockstyleRemoving() {
  mainblock.style.transform = "translateX(0px)";
}
setTimeout(mainBlockstyleRemoving, 2000);

/* bgm control */
let bgm = document.querySelector("#bgm");
let bgmIcon = document.getElementById("playbutton");
let bgmInfoBox = document.getElementById("bgminfobox");

bgmIcon.addEventListener("click", function bgmStartStop() {
  if (bgm.paused) {
    bgm.play();
    bgmIcon.style.background = "url(index.files/bgmon.png)";
    bgmIcon.style.backgroundSize = "contain";
    bgmInfoBox.style.display = "flex";
  } else {
    bgm.pause();
    bgmIcon.style.background = "url(index.files/bgmoff.png)";
    bgmIcon.style.backgroundSize = "contain";
    bgmInfoBox.style.display = "none";
  }
});

let playIcon = "&#9205";
if ((bgm.src = "index.files/bgm.mp3")) {
  bgmInfoBox.innerHTML = "Lacrimosa - Raubtier" + playIcon;
} else {
  bgmInfoBox.innerHTML = "";
}

let firstTrack = document.createElement("span");
firstTrack.innerText = "Lacrimosa - Raubtier 7mb";
firstTrack.classList.add("track");

let secondTrack = document.createElement("span");
secondTrack.innerText = "Lacrimosa - Satura 21mb";
secondTrack.classList.add("track");

let thirdTrack = document.createElement("span");
thirdTrack.innerText = "Lacrimosa - Schakal 15mb";
thirdTrack.classList.add("track");

let fourthTrack = document.createElement("span");
fourthTrack.innerText = "Lacrimosa - Alles Luge 13mb";
fourthTrack.classList.add("track");

bgmInfoBox.appendChild(secondTrack);
bgmInfoBox.appendChild(thirdTrack);
bgmInfoBox.appendChild(fourthTrack);

firstTrack.addEventListener("click", function () {
  bgm.src = "index.files/bgm.mp3";
  bgm.play();
  bgmInfoBox.innerHTML = "Lacrimosa - Raubtier" + playIcon;
  bgmInfoBox.appendChild(secondTrack);
  bgmInfoBox.appendChild(thirdTrack);
  bgmInfoBox.appendChild(fourthTrack);
});
secondTrack.addEventListener("click", function () {
  bgm.src = "index.files/bgm2.mp3";
  bgm.play();
  bgmInfoBox.innerHTML = "Lacrimosa - Satura" + playIcon;
  bgmInfoBox.appendChild(firstTrack);
  bgmInfoBox.appendChild(thirdTrack);
  bgmInfoBox.appendChild(fourthTrack);
});
thirdTrack.addEventListener("click", function () {
  bgm.src = "index.files/bgm3.mp3";
  bgm.play();
  bgmInfoBox.innerHTML = "Lacrimosa - Schakal" + playIcon;
  bgmInfoBox.appendChild(firstTrack);
  bgmInfoBox.appendChild(secondTrack);
  bgmInfoBox.appendChild(fourthTrack);
});
fourthTrack.addEventListener("click", function () {
  bgm.src = "index.files/bgm4.mp3";
  bgm.play();
  bgmInfoBox.innerHTML = "Lacrimosa - Alles Luge" + playIcon;
  bgmInfoBox.appendChild(firstTrack);
  bgmInfoBox.appendChild(secondTrack);
  bgmInfoBox.appendChild(thirdTrack);
});
/* bgm control */

/* language button */
let languageButton = document.querySelector(".langchange-button");
let languageText = document.querySelector(".langtext");
languageButton.addEventListener("click", function () {
  languageButton.classList.toggle("changedlanguage");
  languageText.classList.toggle("changedlanguagetext");

  if (languageText.innerText == "En") {
    languageText.innerText = "Ru";
  } else {
    languageText.innerText = "En";
  }
});
/* language button */
