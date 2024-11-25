// Typing effect
const typingEffect = document.getElementById('typing-effect');
const text = "Happy Birthday...";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingEffect.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when the page loads
window.addEventListener('load', typeWriter);

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  cursorFollower.style.left = e.clientX + 'px';
  cursorFollower.style.top = e.clientY + 'px';
});

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

/*/ Prevent default scrolling behavior
document.addEventListener('wheel', (e) => {
  e.preventDefault();
}, { passive: false });*/

// Smooth scroll to content
document.querySelector('.accordion__header').addEventListener('click', () => {
  const content = document.querySelector('.accordion__content');
  content.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* Adjust body height to prevent scrolling issues
function adjustBodyHeight() {
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  body.style.height = height + 'px';
}

window.addEventListener('load', adjustBodyHeight);
window.addEventListener('resize', adjustBodyHeight);
*/

