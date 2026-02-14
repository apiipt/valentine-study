let noClicked = 0;
const maxNoClicks = 4;

const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const gifelement = document.getElementById("togepi-gif");

const buttonMessages = ["Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"];

let yesScale = 1; // Track Yes button size

// no button clicked
noButton.addEventListener("click", () => {
    // Change image
    if (noClicked === 0) {
        gifelement.src = "img/togepi-sad.gif";
    } else if (noClicked === 1) {
        gifelement.src = "img/togepi-sad2.gif";
    } else {
        gifelement.src = "img/togepi-crying.gif";
    }
    
    // Change No button text
    noButton.textContent = buttonMessages[noClicked % maxNoClicks];
    
    // Make Yes button bigger
    yesScale += 0.3;
    yesButton.style.transform = `scale(${yesScale})`;
    
    // increment the number of clicks
    noClicked++;
});