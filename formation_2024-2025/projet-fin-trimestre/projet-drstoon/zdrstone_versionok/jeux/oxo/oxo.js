let flag = 1;
let vsComputer = false; // La valeur par défaut est joueur contre joueur

// fct pour changer le mode de jeu
function changeGameMode() {
    const gameMode = document.getElementById('gameMode').value;
    vsComputer = gameMode === 'cpu';
    myfunc_2(); // recommencer le game si on change de mode
}

// Fonction appelée chaque fois que l’utilisateur appuie sur une boîte
function myfunc() {
    let boxes = []; 
    while (boxes.length < 9) {
        boxes.push(document.getElementById(`b${boxes.length + 1}`))
    }
    // or
    // for (let i = 1; i <= 9; i++) {
    //     boxes.push(document.getElementById(`b${i}`));
    // }

    let values = boxes.map(box => box.value);

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const checkWin = (player) => {
        for (const pattern of winPatterns) {
            if (pattern.every(index => values[index].toLowerCase() === player)) {
                pattern.forEach(index => boxes[index].style.color = 'red');
                document.getElementById('print').innerHTML = `Joueur ${player.toUpperCase()} gagne`;
                boxes.forEach((box, idx) => {
                    if (!pattern.includes(idx)) box.disabled = true;
                });
                return true;
            }
        }
        return false;
    };

    if (checkWin('x') || checkWin('0')) return;

    if (values.every(value => value === 'X' || value === '0')) {
        document.getElementById('print').innerHTML = "Match null";
    } else {
        document.getElementById('print').innerHTML = flag ? "Au tour du joueur X" : "Au tour du joueur O";
        if (!flag && vsComputer) {
            setTimeout(computerMove, 300); // Petit délai avant le déménagement de l’ordinateur
        }
    }
}

function myfunc_2() {
    
    for (let i = 1; i <= 9; i++) {
        const box = document.getElementById(`b${i}`);
        box.value = '';
        box.disabled = false;
        box.classList.add('reset-box');
        box.style.color = 'black'; 
    }
    document.getElementById('print').innerHTML = "Au tour du joueur X";
    flag = 1;
}

function setBoxValue(boxId) {
    document.getElementById(boxId).value = flag ? "X" : "0";
    // document.getElementById(boxId).innerHTML = flag ? "<img src='/zdrstone_versionok/images/senkutete.webp'>" : "<img src='/zdrstone_versionok/images/tsukasatete.png'>";
    document.getElementById(boxId).disabled = true;
    flag = !flag;
    myfunc();
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(`b${i}`).addEventListener('click', () => {
        if (flag || !vsComputer) { // Autoriser le clic uniquement si c’est le tour du joueur ou en mode 2 joueurs
            setBoxValue(`b${i}`);
        }
    });
}

// Fonction de déplacement de l’ordinateur
function computerMove() {
    let emptyBoxes = [];
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(`b${i}`).value === '') {
            emptyBoxes.push(i);
        }
    }

    if (emptyBoxes.length === 0) return;

    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    setBoxValue(`b${emptyBoxes[randomIndex]}`);
}

// debut game
document.getElementById('print').innerHTML = "Au tour du joueur X";