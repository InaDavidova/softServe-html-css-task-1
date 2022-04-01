document.querySelector("main").addEventListener("click", onClick);
let imageElement = document.querySelector("#slideshowImg");
let slideshowDiv = document.querySelector("#slideshowDiv");
let h2 = slideshowDiv.querySelector('h2');

let index = 1;

function onClick(e) {
  if (e.target.tagName == "BUTTON") {
    if (e.target.id == "close") {
      e.target.parentElement.parentElement.style.display = "none";

    } else if (e.target.id == "next") {
      if (index == 10) {
        index = 1;
      } else {
        index++;
      }

      imageElement.src = `../images/${h2.id}/${index}.jpg`;

    } else if (e.target.id == "previous") {

      if (index == 1) {
        index = 10;
      } else {
        index--;
      }

      imageElement.src = `../images/${h2.id}/${index}.jpg`;

    } else {
      let destination = e.target.parentElement.id;
      slideshowDiv.style.display = 'flex';
      h2.textContent = destination.toUpperCase();
      h2.id = destination;
      imageElement.src = `../images/${h2.id}/${index}.jpg`;
    }
  }
}
