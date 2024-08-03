let preBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let book = document.querySelector("#book");

let p1 = document.querySelector("#p1");
let pF = document.querySelector("#pF");

nextBtn.addEventListener("click", goNext);
preBtn.addEventListener("click", goPrev);
let numOfPage;
if (document.cookie[1] == ";") numOfPage = document.cookie[0];
else if (document.cookie[2] == ";") numOfPage = document.cookie.slice(0, 2);
else numOfPage = document.cookie.slice(0, 3);
numOfPage = parseInt(numOfPage, 10);
console.log("MyS: " + numOfPage);

let currentLocation = 1;
let maxLocation = numOfPage + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  preBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(beginning) {
  if (beginning) book.style.transform = "translateX(0%)";
  else book.style.transform = "translateX(100%)";
  preBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        p1.classList.add("flipped");
        p1.style.zIndex = 1;
        break;
      case numOfPage:
        pF.classList.add("flipped");
        pF.style.zIndex = numOfPage;
        closeBook();
        break;
      case currentLocation:
        document.querySelector("#p" + currentLocation).classList.add("flipped");
        document.querySelector("#p" + currentLocation).style.zIndex =
          currentLocation + 1;
        break;
      default:
        throw new Error("!");
    }
    currentLocation++;
  }
}
function goPrev() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        p1.classList.remove("flipped");
        p1.style.zIndex = numOfPage;
        break;
      case maxLocation:
        openBook();
        pF.classList.remove("flipped");
        pF.style.zIndex = 1;
        break;
      case currentLocation:
        document
          .querySelector("#p" + (currentLocation - 1))
          .classList.remove("flipped");
        document.querySelector("#p" + (currentLocation - 1)).style.zIndex =
          maxLocation + 1 - currentLocation;
        break;
      default:
        throw new Error("!");
    }
    currentLocation--;
  }
}
