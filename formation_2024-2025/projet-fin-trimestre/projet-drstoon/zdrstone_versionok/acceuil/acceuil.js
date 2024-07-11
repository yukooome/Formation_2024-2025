document.querySelectorAll('.carousel-container').forEach((container) => {
    const gallery = container.querySelector('.gallery');
    const indicators = container.querySelectorAll('.indicator');
    let currentIndex = 0;
    const itemsToShow = 4;
    const itemsCount = gallery.children.length;
    const totalPages = Math.ceil(itemsCount / itemsToShow);

    function updateGallery() {
        const transformValue = -((100 / itemsToShow) * currentIndex);
        gallery.style.transform = `translateX(${transformValue}%)`;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === Math.floor(currentIndex / itemsToShow)) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index * itemsToShow;
            updateGallery();
        });
    });

    updateGallery(); // Initial update to set the correct active indicator
});




// caroussel sur premiere p acceuil
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    let index = 0;
  
    function showNextImage() {
      index = (index + 1) % images.length;
      carousel.style.transform = `translateX(${-index * 100}%)`;
    }
  
    setInterval(showNextImage, 5000);
  });



//   menu
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);




// point xarte tresorfunction getRandomPosition(element) {
 
document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("find-button");
  const modal = document.getElementById("fact-modal");
  const closeButton = document.querySelector(".close-button");
  const factText = document.getElementById("fact-text");
  const treasure = document.getElementById("treasure");

  // Clé API pour API Ninjas
  // const apiKeyNinjas = "YOUR_API_KEY"; // Remplacez par votre clé API Ninjas

  function fetchFact() {
      axios.get('https://api.api-ninjas.com/v1/facts', {
          headers: { 'X-Api-Key': 'ygDdYsbfT1Vyq6h5Hiv9Ug==GwcLjJmhHgtmR3LX' }
      })
      .then(response => {
          const fact = response.data[0].fact;
          displayFact(fact);
      })
      .catch(error => {
          console.error('Erreur lors de la récupération de la fact:', error);
      });
  }

  function displayFact(fact) {
      factText.textContent = fact; // Affiche la fact directement sans traduction
      modal.style.display = "block";
  }

  findButton.addEventListener("click", () => {
      treasure.style.left = Math.random() * 100 + "%";
      treasure.style.top = Math.random() * 100 + "%";
      treasure.style.display = "block";
      fetchFact();
  });

  closeButton.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
});