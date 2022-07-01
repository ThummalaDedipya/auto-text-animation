const containerEl = document.querySelector(".container");

const skill = ["Dancer", "Web Developer", "student", "Poet"];

let skillsIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${skill[skillsIndex].slice(0, 1) === "I" ? "an" : "a"} ${skill[
    skillsIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === skill[skillsIndex].length) {
    skillsIndex++;
    characterIndex = 0;
  }

  if (skillsIndex === skill.length) {
    skillsIndex = 0;
  }
  setTimeout(updateText, 400);
}