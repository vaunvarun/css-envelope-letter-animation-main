const codeTextElement = document.getElementById('code-text');
const startButton = document.getElementById('start-button');
const errorSound = document.getElementById('error-sound');
const correctSound = document.getElementById('correct-sound');

const codeLines = [
  "function greet() {",
  "  console.log('Hello World';", // Error here: missing closing parenthesis
  "}",
  "",
  "greet();"
];

// Simulating the typing effect for code
function typeCode(lines, index = 0) {
  if (index < lines.length) {
    codeTextElement.innerHTML += lines[index] + "\n";
    index++;
    setTimeout(() => typeCode(lines, index), 500);  // Simulate typing effect
  } else {
    highlightError();  // After typing is complete, highlight the error
  }
}

// Function to highlight the error and play sound
function highlightError() {
  // Highlight the line with error (index 1 in this case)
  const lines = codeTextElement.innerHTML.split("\n");
  lines[1] = `<span style="color: red;">${lines[1]}</span>`;  // Make the error line red
  codeTextElement.innerHTML = lines.join("\n");

  // Play the error sound
  errorSound.play();

  // Show a prompt to fix the error
  setTimeout(() => {
    alert("Spot the Error! Can you fix the code?");
    correctSound.play();  // Play correct sound when the user clicks start
  }, 2000);
}

// Start the animation and sound
startButton.addEventListener("click", () => {
  startButton.style.display = 'none';  // Hide the start button
  typeCode(codeLines);  // Start typing code
});
