let bloodMax = 100; // Quantité maximale de sang
let blood = 100; // Quantité de sang actuelle
let bloodLossPerSecond = 0.5; // Quantité de sang perdue par seconde
let tick = 10; // Nombre de ticks par seconde pour la boucle de jeu

const bloodBar = document.getElementById("bloodBar");
const bloodValue = document.getElementById("bloodValue");
const bloodMaxEl = document.getElementById("bloodMax");
const bloodLossEl = document.getElementById("bloodLoss");

bloodMaxEl.textContent = bloodMax;
bloodLossEl.textContent = bloodLossPerSecond;

// Mise à jour de l'affichage
function updateBloodUI() {
  bloodValue.textContent = Math.max(0, blood).toFixed(1);

  const percent = (blood / bloodMax) * 100;
  bloodBar.style.width = Math.max(0, percent) + "%";
}

// Perte automatique de blood
setInterval(() => {
  blood -= bloodLossPerSecond / tick;
  if (blood < 0) blood = 0;
  updateBloodUI();
}, 1000 / tick);

updateBloodUI();
