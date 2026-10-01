/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

let message = "Hello! <3";

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p id="message">${message}</p>
  <button id="increment">Click Me!</button>
`;

// Add click handler
const button = document.getElementById("increment")!;
const messageElement = document.getElementById("message")!;

button.addEventListener("click", () => {
  // This looks like to a good place to add some logic!
  message = "You just clicked the button!";
  messageElement.textContent = message;
  console.log("I have these thingies:", button, messageElement, message);
});
