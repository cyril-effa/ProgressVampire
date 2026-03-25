let gold = 0;
let goldPerSecond = 1;

function gameLoop()
{
    gold += goldPerSecond / 10;// tick toutes les 100ms
    updateUI();
}

setInterval(gameLoop, 100);

function saveGame()
{
    localStorage.setItem("save", JSON.stringify({
        gold:gold,
        goldPerSecond:goldPerSecond
    }));
}

function loadGame()
{
    let save=JSON.parse(localStorage.getItem("save"));
    if (save) {
        gold = save.gold;
        goldPerSecond = save.goldPerSecond;
    }
}

setInterval(saveGame, 5000);

let upgradeCost=10;

function buyUpgrade()
{
    if (gold >= upgradeCost) {
        gold -= upgradeCost;
        goldPerSecond += 1;
        upgradeCost *= 1.5;
    }
}

function updateUI()
{
    document.getElementById("gold").innerText = Math.floor(gold);
}