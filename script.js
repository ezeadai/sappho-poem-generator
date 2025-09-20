const poems = [
  `The stars about the fair moon lose their bright beauty when she, almost full, illumines all earth with silver.`,
  ` And by the cool stream the breeze murmurs through apple branches and slumber pours down from quivering leaves.`,
  ` Come, goddess of Cyprus, and in golden cups serve nectar delicately mixed with delights.`,
  `May I win this prize, O golden-crowned Aphrodite.`,
  `Who made me gifts and honored me?`
];

const button = document.getElementById('poem-button');
const poemBox = document.getElementById('poem-box');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * poems.length);
  poemBox.style.opacity = 0;
  setTimeout(() => {
    poemBox.textContent = poems[randomIndex];
    poemBox.style.opacity = 1;
  }, 300);
});
