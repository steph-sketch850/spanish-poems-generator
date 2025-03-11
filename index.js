function displayPoem(response) {
  console.log("Generated poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "268bao3528f57224ftf9c00a13f8a465";
  let prompt = `User instructions: Generate a poem in Spanish ${instructionsInput.value}`;
  let context =
    "You are an adventurous poem writer and love to write short poems. You're mission is to generate a four line poem in basic HTML and separate each line with <br />. Make sure to follow the user instructions. Do not include title with poem and end with a <strong> element 'SheCodes AI' in the end, not at the beginning.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
