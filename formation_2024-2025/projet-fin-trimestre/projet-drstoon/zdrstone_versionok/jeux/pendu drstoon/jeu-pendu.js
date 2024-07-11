document.addEventListener("DOMContentLoaded", function () {
    /* DOM ELEMENTS */
    const REMAINING_TRY = document.getElementById('remainingTry');
    const board = document.getElementById('board');
    const keyboard = document.getElementById('keyboard');
    const gamesPlayedSpan = document.querySelector('.games-played');
    const playerWinsSpan = document.querySelector('.player-wins');
    const computerWinsSpan = document.querySelector('.computer-wins');
    const resetButton = document.getElementById('reset-stats');
    const hangmanImage = document.getElementById('hangmanImage');
    const endImageContainer = document.getElementById('end-image-container');
    const endImage = document.getElementById('end-image');
    const endText = document.getElementById('end-text'); 

    const correctImage = "/zdrstone_versionok/images/giflove.gif";  
    const incorrectImage = "/zdrstone_versionok/images/senkuenerver.gif"; 
    const loseImage = "/zdrstone_versionok/images/senkudecu.webp";  

    let remainingTry = 9;
    let gamesPlayed = localStorage.getItem('gamesPlayed') || 0;
    let playerWins = localStorage.getItem('playerWins') || 0;
    let computerWins = localStorage.getItem('computerWins') || 0;

    updateStatisticsDisplay();

    const Alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];


    const wordList = ["SENKU", "TAIJU", "YUZURIA", "TSUKASA", "CHROME", "KOHAKU", "GEN", "RURI", "KINRO", "GINRO", "SUIKA"];
    const secretWordIndex = Math.floor(Math.random() * wordList.length);
    const secretWord = wordList[secretWordIndex];


    console.log("Mot à trouver :", secretWord);


    Alphabet.forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letters');
        letterElement.id = `l${letter}`;
        letterElement.textContent = letter;
        keyboard.appendChild(letterElement);
    });

    for (let i = 1; i <= secretWord.length; i++) {
        board.textContent += '_';
    }

    board.textContent = board.textContent.replace(' ', '');
    const letters = [...document.querySelectorAll('.letters')];

    function updateStatisticsDisplay() {
        gamesPlayedSpan.textContent = gamesPlayed;
        playerWinsSpan.textContent = playerWins;
        computerWinsSpan.textContent = computerWins;
    }

    function displayEndImage(imageSrc, text) {
        endImage.src = imageSrc;
        endText.textContent = text; 
        endImageContainer.style.display = 'flex';
    }

    function clickLetter(l) {
        let clickedLetter = document.getElementById(l.target.id);
        if (secretWord.includes(clickedLetter.textContent)) {
            console.log(`La lettre "${clickedLetter.textContent}" est présente dans le mot secret.`);
            hangmanImage.src = correctImage; 
            let indexOfLetter = [];
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === clickedLetter.textContent) {
                    indexOfLetter.push(i);
                }
            }
            let splitBoard = board.textContent.split('');
            for (let i = 0; i < indexOfLetter.length; i++) {
                splitBoard[indexOfLetter[i]] = clickedLetter.textContent;
            }
            board.textContent = splitBoard.join('');
        } else {
            remainingTry--;
            REMAINING_TRY.textContent = remainingTry;
            hangmanImage.src = incorrectImage; 
            console.log(`La lettre "${clickedLetter.textContent}" n'est pas présente dans le mot secret.`);
        }

        if (board.textContent === secretWord) {
            playerWins++;
            gamesPlayed++;
            localStorage.setItem('playerWins', playerWins);
            localStorage.setItem('gamesPlayed', gamesPlayed);
            updateStatisticsDisplay();
            displayEndImage(getWinImageSrc(secretWord), "Tu as raison à 10 milliards de pour cent !");  
            setTimeout(() => {
                document.location.reload();
            }, 4000);
        } else if (remainingTry === 0) {
            computerWins++;
            gamesPlayed++;
            localStorage.setItem('computerWins', computerWins);
            localStorage.setItem('gamesPlayed', gamesPlayed);
            updateStatisticsDisplay();
            displayEndImage(loseImage, "La science n'a pas besoin de toi.. t'es trop nul");  
            setTimeout(() => {
                document.location.reload();
            }, 4000);
        }
        clickedLetter.textContent = '';
    }

    function resetStatistics() {
        gamesPlayed = 0;
        playerWins = 0;
        computerWins = 0;
        updateStatisticsDisplay();
        localStorage.setItem('gamesPlayed', gamesPlayed);
        localStorage.setItem('playerWins', playerWins);
        localStorage.setItem('computerWins', computerWins);
    }

    resetButton.addEventListener('click', resetStatistics);

    letters.forEach((l) => {
        l.addEventListener('click', clickLetter);
    });

    function getWinImageSrc(word) {
        // Retourne le chemin de l'image en fonction du mot trouvé
        switch (word) {
            case "SENKU":
                return "/zdrstone_versionok/images/senkureponseok.webp";
            case "TAIJU":
                return "/zdrstone_versionok/images/taijureponseok.webp";
            case "YUZURIA":
                return "/zdrstone_versionok/images/Yuzurihareponseok.webp";
            case "TSUKASA":
                return "/zdrstone_versionok/images/Tsukasareponseok.webp";
            case "CHROME":
                return "/zdrstone_versionok/images/Chromereponseok.webp";
            case "KOHAKU":
                return "/zdrstone_versionok/images/kohakureponseok.webp";
            case "GEN":
                return "/zdrstone_versionok/images/genreponseok.jpeg";
            case "RURI":
                return "/zdrstone_versionok/images/Rurireponseok.jpeg";
            case "KINRO":
                return "/zdrstone_versionok/images/Kinroreponseok.webp";
            case "GINRO":
                return "/zdrstone_versionok/images/Ginroreponseok.webp";
            case "SUIKA":
                return "/zdrstone_versionok/images/Suikareponseok.webp";
            default:
                return "/zdrstone_versionok/images/default_image.webp"; // Si aucun mot ne correspond, retourne une image par défaut
        }
    }
});