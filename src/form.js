const form = document.querySelector("form");
const [inputName, inputEmail] = document.querySelectorAll("input");
const inputComments = document.querySelector("textarea");
const pTag = form.querySelector("p");
const notificationDiv = document.querySelector("#notificationDiv");

form.addEventListener("submit", onSubmit);

notificationDiv.querySelector("button").addEventListener("click", () => {
  notificationDiv.style.display = "none";
});

function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let [name, email, comments] = formData.values();

  name = name.trim();
  email = email.trim();
  comments = comments.trim();

  if (!name) {
    inputName.style.borderColor = "red";
  } else {
    inputName.style.borderColor = "initial";
  }

  if (!email) {
    inputEmail.style.borderColor = "red";
  } else {
    inputEmail.style.borderColor = "initial";
  }

  if (!comments) {
    inputComments.style.borderColor = "red";
  } else {
    inputComments.style.borderColor = "initial";
  }

  if (name && email && comments) {
    e.target.reset();
    pTag.style.color = "initial";
    notificationDiv.style.display = "flex";
  } else {
    pTag.style.color = "red";
  }
}
