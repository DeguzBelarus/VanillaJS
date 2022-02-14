//main vars
var mainBlock = document.querySelector("#block");
var shelf = document.querySelector("#shelf");
var mouseState;
//main vars

// mouse left button state detection
document.addEventListener("mouseup", function () {
  mouseState = "up";
});
document.addEventListener("mousedown", function () {
  mouseState = "down";
});
// mouse left button state detection

//main block actions
mainBlock.addEventListener("mousedown", function take(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  window.addEventListener("mousemove", function moving(event) {
    let currentMouseX = event.pageX;
    let currentMouseY = event.pageY;

    if (mouseState == "down") {
      mainBlock.style.left = currentMouseX - x + "px";
      mainBlock.style.top = currentMouseY - y + "px";
    }
    mainBlock.addEventListener("mouseup", function drop(event) {
      window.removeEventListener("mousemove", moving);
      event.target.removeEventListener("mouseup", drop);

      function falling() {
        let windowHeight = window.innerHeight;
        let mainBlockInfo = mainBlock.getBoundingClientRect();
        let shelfInfo = shelf.getBoundingClientRect();

        let mainBlockCurrentHeight = Number(
          mainBlock.style.top.slice(0, mainBlock.style.top.length - 2)
        );

        console.log(mainBlockCurrentHeight);
        console.log(shelfInfo);

        if (mainBlockCurrentHeight >= windowHeight - mainBlockInfo.height) {
          clearInterval(fallingInterval);
          mainBlock.style.top = windowHeight - mainBlockInfo.height + "px";
        } else if (
          mainBlockCurrentHeight >= shelfInfo.top - mainBlockInfo.height &&
          mainBlockInfo.x + mainBlockInfo.width > shelfInfo.x &&
          mainBlockInfo.x < shelfInfo.x + shelfInfo.width
        ) {
          clearInterval(fallingInterval);
          mainBlock.style.top = shelfInfo.top - mainBlockInfo.height + "px";
        } else mainBlock.style.top = mainBlockCurrentHeight + 0.03 + "px";

        mainBlock.addEventListener("mousedown", function () {
          clearInterval(fallingInterval);
          mainBlock.addEventListener("mouseup", drop);
        });
      }
      var fallingInterval = setInterval(falling, 1);
    });
  });
});
//main block actions

// Shelf actions
shelf.addEventListener("mousedown", function take(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  let mouseX = event.pageX;
  let mouseY = event.pageY;

  let mainBlockInfo = mainBlock.getBoundingClientRect();

  window.addEventListener("mousemove", function moving(event) {
    let currentMouseX = event.pageX;
    let currentMouseY = event.pageY;

    let shelfInfo = shelf.getBoundingClientRect();

    let mainBlockCurrentHeight = Number(
      mainBlock.style.top.slice(0, mainBlock.style.top.length - 2)
    );

    shelf.style.left = currentMouseX - x + "px";
    shelf.style.top = currentMouseY - y + "px";

    if (
      mainBlockCurrentHeight >= shelfInfo.top - mainBlockInfo.height &&
      mainBlockInfo.x + mainBlockInfo.width > shelfInfo.x &&
      mainBlockInfo.x < shelfInfo.x + shelfInfo.width
    ) {
      mainBlock.style.top = mainBlockInfo.y + (currentMouseY - mouseY) + "px";
      mainBlock.style.left = mainBlockInfo.x + (currentMouseX - mouseX) + "px";

      mainBlock.style.background = "yellow";
    }

    shelf.addEventListener("mouseup", function (event) {
      window.removeEventListener("mousemove", moving);
    });
  });
});
// Shelf actions
