function displayPoem(response) {
  console.log("Poem generated:");

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
  let apiKey = "a0bdfcad3964e6e3300b74o509fbat1b";
  let prompt = `instructions:Generate a spanish poem about ${instructionsInput.value}`;
  let context =
    "You are a modern poet expert and like to write shorts and original poems, your goal is to write a 3 line poem inbasic HTML. Make sure to follow the instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
