function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Hello",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
