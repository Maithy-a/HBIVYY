// Select the container where the confetti will be appended
const container = document.body;

// Function to create a single confetti element
function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Randomize confetti properties
    const randomLeft = Math.random() * 100; // Random left position in viewport width %
    const randomDelay = Math.random() * 5;  // Random animation delay (0s to 5s)
    const randomColor = `rgb(${Math.floor(Math.random() * 255)}, 
                           ${Math.floor(Math.random() * 255)}, 
                           ${Math.floor(Math.random() * 255)})`;

    // Apply random properties
    confetti.style.left = `${randomLeft}vw`;   // Position in viewport width
    confetti.style.animationDelay = `${randomDelay}s`;
    confetti.style.backgroundColor = randomColor;

    // Append confetti to the container
    container.appendChild(confetti);
}

// Generate multiple confetti pieces
for (let i = 0; i < 35; i++) {
    createConfettiPiece();
}

//cursor
// Select elements
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  // Set cursor position
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  // Smooth follower movement
  follower.style.transform = `translate(${e.pageX - 20}px, ${e.pageY - 20}px)`;
});

// Optional: Add a hover effect on links to scale the cursor
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    follower.classList.add("hover");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    follower.classList.remove("hover");
  });
});

//TYPING
document.addEventListener("DOMContentLoaded", function() {
    const text = "Happy Birthday!!"; 
    const typingElement = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }

    type();
});
