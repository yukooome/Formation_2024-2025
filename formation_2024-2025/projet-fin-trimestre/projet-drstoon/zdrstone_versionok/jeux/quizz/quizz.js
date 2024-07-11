fetch("quizz.json")
  .then((response) => response.json())
  .then((questions) => {
    const MODAL = document.getElementById("modal");
    const QUIZ_CONTAINER = document.getElementById("quiz-container");
    const SCORE_CONTAINER = document.getElementById("score-container");

    const TEAMTSUKASA = document.getElementById("teamtsukasa");
    const TEAMSENKU = document.getElementById("teamsenku");
    const ALEATOIRE = document.getElementById("aleatoire");

    const NUMBER = document.getElementById("number");
    const QUESTION = document.getElementById("question");
    const OPTION1 = document.getElementById("option1");
    const OPTION2 = document.getElementById("option2");
    const OPTION3 = document.getElementById("option3");
    const OPTION4 = document.getElementById("option4");
    const RADIO_INPUTS = document.querySelectorAll("input[type=radio]");

    const MODAL_TEXT = document.getElementById("modal-text");
    const SCORE_TEXT = document.getElementById("score-text");

    const NEXT_BUTTON = document.getElementById("next-button");
    const RESTART = document.getElementById("restart");

    const SPEAKER = document.getElementById("speaker");
    let MUSIC;

    let house;
    let questionIndex = 0;
    let score = 0;

    let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    let selectedQuestions = shuffledQuestions.slice(0, 10);

    TEAMTSUKASA.addEventListener("click", () => {
      startQuiz("teamtsukasa", "la team tsukasa", "/zdrstone_versionok/audio/Ennemyorally.m4a");
    });

    TEAMSENKU.addEventListener("click", () => {
      startQuiz("teamsenku", " la team senku", "/zdrstone_versionok/audio/kingdomscience.m4a");
    });

    ALEATOIRE.addEventListener("click", () => {
      let randomNumber = Math.ceil(Math.random() * 2);
      let teamClass = randomNumber === 1 ? "teamtsukasa" : "teamsenku";
      let teamName = randomNumber === 1 ? "team tsukasa" : "team senku";
      let musicPath = randomNumber === 1 ? "../audio/tsukasa_music.m4a" : "/zdrstone_versionok/audio/senku_music.m4a";

      MODAL_TEXT.innerText = teamName + " !";
      setTimeout(() => startQuiz(teamClass, teamName, musicPath), 1000);
    });

    function startQuiz(teamClass, teamName, musicPath) {
      if (MUSIC) {
        MUSIC.pause(); // Arrêter la musique si elle est déjà en cours
      }
      MODAL.classList.add("hidden");
      QUIZ_CONTAINER.classList.remove("hidden");
      QUIZ_CONTAINER.classList.add(teamClass);
      house = teamName;
      MUSIC = new Audio(musicPath);
      MUSIC.play();
      loadQuestion();
    }

    function loadQuestion() {
      NUMBER.innerText = questionIndex + 1;
      QUESTION.innerText = selectedQuestions[questionIndex].question;
      OPTION1.innerText = selectedQuestions[questionIndex].options[0];
      OPTION2.innerText = selectedQuestions[questionIndex].options[1];
      OPTION3.innerText = selectedQuestions[questionIndex].options[2];
      OPTION4.innerText = selectedQuestions[questionIndex].options[3];
    }

    NEXT_BUTTON.addEventListener("click", () => {
      let checkedRadioButton = document.querySelector("input[type=radio]:checked");

      if (checkedRadioButton) {
        if (checkedRadioButton.nextElementSibling.innerText === selectedQuestions[questionIndex].answer) {
          console.log("Bonne réponse");
          ++score;
        } else {
          console.log("Mauvaise réponse");
        }

        if (questionIndex < selectedQuestions.length - 1) {
          RADIO_INPUTS.forEach((radioInput) => {
            radioInput.checked = false;
          });

          questionIndex++;
          loadQuestion();
        } else {
          displayScore();
        }
      } else {
        alert("Même si tu ne connais pas la réponse, essaye !");
      }
    });

    function displayScore() {
      let scoreDialogue;

      switch (true) {
        case score < 2:
          scoreDialogue = score + " point sur 10 pour " + house + ". J'espère au moins que tu es doué dans autre chose!";
          break;
        case score < 5:
          scoreDialogue = score + " points sur 10 pour " + house + ". On ne gagnera pas la guerre comme ça!";
          break;
        case score < 8:
          scoreDialogue = score + " points sur 10 pour " + house + ". On a encore une chance!";
          break;
        case score < 10:
          scoreDialogue = score + " points sur 10 pour " + house + ". Pas mal pour un débutant!";
          break;
        case score === 10:
          scoreDialogue = score + " points sur 10 pour " + house + ". Génial ! La victoire est à nous ! ";
          break;
        default:
          console.log("Erreur au niveau du switch score");
      }

      SCORE_TEXT.innerText = scoreDialogue;

      if (house === "la team tsukasa") {
        document.getElementById("Dumbledore").src = "/zdrstone_versionok/images/Tsukasa.webp";
      } else if (house === " la team senku") {
        document.getElementById("Dumbledore").src = "/zdrstone_versionok/images/senkucontent.webp";
      }

      QUIZ_CONTAINER.classList.add("hidden");
      SCORE_CONTAINER.classList.remove("hidden");
    }

    RESTART.addEventListener("click", () => {
      questionIndex = 0;
      score = 0;
      house = "";
      QUIZ_CONTAINER.classList.remove("teamtsukasa");
      QUIZ_CONTAINER.classList.remove("teamsenku");

      if (MUSIC) {
        MUSIC.pause(); // Arrêter la musique avant de redémarrer
      }

      shuffledQuestions = questions.sort(() => 0.5 - Math.random());
      selectedQuestions = shuffledQuestions.slice(0, 10);

      SCORE_CONTAINER.classList.add("hidden");
      MODAL.classList.remove("hidden");
    });

    SPEAKER.addEventListener("click", () => {
      if (MUSIC.paused) {
        MUSIC.play();
        SPEAKER.src = "/zdrstone_versionok/images/monter-le-son.png";
      } else {
        MUSIC.pause();
        SPEAKER.src = "/zdrstone_versionok/images/en-sourdine.png";
      }
    });
  })
  .catch((error) => console.error("Erreur lors de la récupération des données du quiz :", error));