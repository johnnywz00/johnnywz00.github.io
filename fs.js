document.getElementById("Pzoknochoy").textContent = "Dlorweg fench";
var elem = document.createElement('p');
elem.textContent = "Created elem text";
document.body.appendChild(elem);

const button = document.querySelector("button");

// button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}


function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const b of buttons) {
    b.addEventListener("click", createParagraph);
  }
  