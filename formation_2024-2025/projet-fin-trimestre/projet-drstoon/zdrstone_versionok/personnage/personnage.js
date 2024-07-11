


document.addEventListener("DOMContentLoaded", function() {
    const characters = [
        { name: "SENKU", img: "../images/senkuok.webp", link: "../personnage/personnagesenku.html",
        
        apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.", 
        role: "Le héros de 'Dr. Stone', Senku Ishigami est un prodige scientifique de 16 ans déterminé à reconstruire la civilisation après un mystérieux phénomène de pétrification. Avec son intelligence exceptionnelle et sa passion pour la science, il utilise ses connaissances pour recréer les technologies perdues et inspirer ceux qui l'entourent. Charismatique et ingénieux, Senku incarne l'esprit de la découverte et l'importance de la science dans la quête de l'humanité pour surmonter les défis.", 
        personnalite:"Senku est connu pour son esprit vif, sa détermination inébranlable et son pragmatisme. Il est souvent décrit comme étant froid et calculateur, mais il a également un côté bienveillant et protecteur envers ses amis.",  
        compétences: "Senku possède une connaissance approfondie de divers domaines scientifiques, y compris la chimie, la physique, l'ingénierie et la biologie. Ses compétences sont essentielles pour redécouvrir et rétablir la technologie moderne dans un monde post-apocalyptique.",
        apparence: "Senku a des cheveux noirs courts et des yeux marron. Il porte généralement des lunettes et des vêtements simples mais pratiques, adaptés à ses expéditions scientifiques et à ses travaux de laboratoire.",
        relations: "Senku entretient des relations variées avec les autres personnages de la série. Il est particulièrement proche de Taiju et Yuzuriha, ainsi que de Chrome et d'autres membres du Royaume de la Science.",
        evolution_du_personnage: "Tout au long de la série, Senku montre une croissance personnelle en termes de compréhension émotionnelle et de leadership. Il passe d'un scientifique solitaire à un chef charismatique capable d'unir les gens autour de sa vision de la reconstruction de la civilisation.",
        role_dans_histoire: "Senku dirige le Royaume de la Science dans la réinvention de la technologie et dans la lutte pour survivre et prospérer dans un monde redécouvert après la pétrification. Ses efforts visent à restaurer la civilisation humaine en utilisant la science comme pilier central."
        },

        { name: "TAIJU", img: "../images/taijureponseok.webp", link: "../personnage/personnagetaiju.html",
        
        apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
        role: "Meilleur ami de Senku dans 'Dr. Stone', Taiju Oki est un lycéen robuste et déterminé, connu pour sa force physique impressionnante et son endurance incroyable. Bien qu'il ne soit pas aussi brillant que Senku en sciences, sa loyauté inébranlable et son enthousiasme contagieux font de lui un allié précieux.",
        personnalite: "Taiju est aimable, optimiste et plein d'énergie. Il a un cœur généreux et est prêt à tout pour protéger ses amis et ses proches. Sa détermination et son esprit combatif le rendent indispensable dans les situations de crise.",
        competences: "Taiju est principalement connu pour sa force physique surhumaine et son endurance. Bien qu'il ne soit pas expert en sciences comme Senku, il apporte une contribution précieuse à l'équipe par sa force brute et sa détermination.",
        apparence: "Taiju a des cheveux bruns en désordre et des yeux marron. Il porte souvent des vêtements simples et pratiques, adaptés à sa vie en plein air et à ses aventures post-apocalyptiques.",
        relations: "Taiju est extrêmement proche de Senku, Yuzuriha et des autres membres du Royaume de la Science. Sa relation avec Yuzuriha est particulièrement importante, montrant un amour sincère et une loyauté indéfectible envers ses amis.",
        evolution_du_personnage: "Au fil de la série, Taiju montre une croissance personnelle en termes de maturité émotionnelle et de capacité à prendre des décisions cruciales. Il passe d'un adolescent impétueux à un jeune homme responsable et capable de guider les autres dans des moments difficiles.",
        role_dans_histoire: "Taiju joue un rôle crucial dans la protection et le soutien de Senku et des membres du Royaume de la Science. Son courage et sa loyauté sont essentiels pour affronter les dangers du monde post-pétrification."
    },
        { name: "YUZURIA", img: "../images/Yuzurihareponseok.webp", link: "../personnage/personnageyuzuria.html",
    
        
      apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
      role: "Yuzuriha Ogawa est une jeune fille douce et courageuse, connue pour ses compétences en couture et son sens artistique. Elle est dévouée et prête à tout pour aider ses amis, apportant une perspective créative aux défis qu'ils rencontrent.",
      personnalite: "Yuzuriha est gentille, attentionnée et possède une force intérieure remarquable. Elle est optimiste même dans les situations les plus sombres et sait toujours trouver un moyen de soutenir ses amis.",
      competences: "Yuzuriha excelle dans la couture et les arts domestiques. Ses compétences en matière de création et de réparation de vêtements sont essentielles pour maintenir le moral élevé du groupe, ainsi que pour fournir des solutions pratiques aux défis quotidiens.",
      apparence: "Yuzuriha a des cheveux noirs mi-longs et des yeux marron. Elle porte des vêtements simples mais élégants, souvent conçus ou réparés par elle-même, reflétant son talent en couture et son souci du détail.",
      relations: "Yuzuriha est particulièrement proche de Senku et Taiju, formant un trio très uni depuis le début de la série. Sa relation avec Taiju montre une affection profonde et un soutien mutuel indéfectible.",
      evolution_du_personnage: "Tout au long de la série, Yuzuriha montre une croissance personnelle en termes de force émotionnelle et de capacité à surmonter les défis personnels. Elle devient un pilier de soutien pour ses amis, inspirant confiance et optimisme."
    
    },
        { name: "TSUKASA", img: "../images/Tsukasa.webp", link: "../personnage/personnaget.html",
    
      apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
      role: "L'antagoniste devenu allié, Tsukasa Shishio est un combattant incroyablement puissant avec des idéaux de survie des plus forts. Convaincu que seuls les jeunes et les purs méritent de vivre dans le nouveau monde, il s'oppose initialement à Senku.",
      personnalite: "Tsukasa est charismatique, déterminé et possède une force physique et mentale impressionnante. Bien qu'il soit perçu comme impitoyable par certains, il a un code moral strict et un profond amour pour sa sœur.",
      competences: "Tsukasa est un expert en combat rapproché et en survie en milieu sauvage. Ses compétences martiales, combinées à sa force brute et à sa résilience mentale, en font un adversaire redoutable mais respecté.",
      apparence: "Tsukasa a des cheveux bruns foncés et des yeux marron. Il porte des vêtements simples mais robustes, adaptés à son style de vie nomade et à ses compétences de chasseur.",
      relations: "Tsukasa entretient une relation complexe avec Senku, évoluant d'une hostilité initiale à une collaboration pragmatique basée sur le respect mutuel et des objectifs communs. Sa relation avec sa sœur est profonde et montre un côté protecteur et aimant de sa personnalité.",
      evolution_du_personnage: "Au fil de la série, Tsukasa montre une évolution significative de ses convictions idéalistes vers une compréhension plus nuancée du monde. Sa transformation de l'antagoniste principal à un allié potentiel est essentielle pour l'équilibre des forces et des perspectives au sein du groupe."
    
    
    },
        { name: "CHROME", img: "../images/Chromereponseok.webp", link: "../personnage/personnagechrome.html",
    
                apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
                role: "Chrome est un jeune scientifique autodidacte et l'un des principaux alliés de Senku Ishigami. Avant la renaissance scientifique menée par Senku, il était considéré comme un \"sorcier\" dans son village en raison de ses connaissances en sciences naturelles.",
                personnalite: "Curieux, passionné et avide de connaissances, Chrome est enthousiaste et déterminé à comprendre le monde. Il adore expérimenter et découvrir de nouvelles choses.",
                competences: "Avant de rencontrer Senku, il possédait des bases en chimie et en minéralogie. Ses compétences ont considérablement évolué grâce à Senku, devenant crucial pour les projets du Royaume de la Science.",
                apparence: "Chrome a des cheveux bruns ébouriffés et des yeux bruns. Il porte des vêtements simples et pratiques, souvent faits de matériaux naturels, adaptés à ses activités de collecte et d'expérimentation.",
                relations: "Chrome est un ami proche et un allié fidèle de Senku. Il admire profondément les connaissances scientifiques de Senku et travaille en étroite collaboration avec les autres membres du Royaume de la Science.",
                evolution_du_personnage: "Au fil de la série, Chrome montre une croissance personnelle remarquable, passant d'un \"sorcier\" autodidacte à un scientifique compétent capable de comprendre et d'appliquer des concepts scientifiques avancés. Sa créativité et sa détermination sont cruciales pour les progrès technologiques du groupe."
    
    },
        { name: "GEN", img: "../images/genreponseok.jpeg", link: "../personnage/personnagegen.html",
    
                apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
                role: "Gen Asagiri est un manipulateur habile et charismatique, capable de convaincre et de tromper avec aisance. En tant qu'expert en relations publiques et en psychologie sociale, il apporte une dimension stratégique cruciale au groupe de Senku.",
                personnalite: "Gen est astucieux, perspicace et capable de lire les gens avec précision. Bien qu'il soit souvent perçu comme sournois, il cache un cœur bien intentionné et une loyauté profonde envers ses compagnons.",
                competences: "Gen excelle dans la manipulation psychologique et la négociation. Ses talents en relations publiques sont essentiels pour établir des alliances et convaincre les autres de coopérer avec le Royaume de la Science.",
                apparence: "Gen a des cheveux noirs en bataille et des yeux bruns vifs. Il porte des vêtements élégants et modernes, souvent adaptés à ses rôles de diplomate et d'intermédiaire au sein des communautés rencontrées.",
                relations: "Gen entretient des relations complexes et parfois ambiguës avec les autres membres du Royaume de la Science. Sa relation avec Senku oscille entre la méfiance stratégique et un respect mutuel pour leurs compétences respectives.",
                evolution_du_personnage: "Au fil de la série, Gen montre une croissance personnelle en termes de développement émotionnel et de compréhension de ses motivations profondes. Il passe d'un manipulateur calculateur à un allié plus transparent et engagé envers la cause commune du Royaume de la Science."
    
    
    
    },
        { name: "SUICA", img: "../images/suiica.jpg", link: "../personnage/personnagesuika.html",

        apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
        role: "Suika est un membre précieux du Royaume de la Science dans 'Dr. Stone'. Malgré sa jeune apparence et sa timidité, elle joue un rôle crucial en utilisant son talent unique pour l'espionnage et la reconnaissance. Elle apporte également une perspective innocente mais perspicace sur les défis auxquels le groupe est confronté.",
        personnalite: "Suika est douce, timide et aimable. Elle est souvent curieuse et émerveillée par les découvertes scientifiques du groupe. Malgré sa petite taille et sa voix étouffée par son masque, elle est loyale envers ses amis et montre une détermination inébranlable à les soutenir.",
        competences: "Suika possède une compétence unique pour voir clairement à travers son masque d'eau, ce qui lui permet de se faufiler et d'observer sans être détectée. Elle apporte également une aide précieuse en termes de collecte de ressources et de reconnaissance du terrain.",
        apparence: "Suika porte habituellement un masque d'eau qui couvre la majeure partie de son visage, ainsi que des vêtements simples adaptés à la survie dans un monde post-apocalyptique. Elle a des cheveux courts et bruns et des yeux brillants.",
        relations: "Suika est proche de Senku et des autres membres du Royaume de la Science. Elle a un lien particulier avec Chrome, qui partage son enthousiasme pour les découvertes scientifiques et l'exploration.",
        evolution_du_personnage: "Au fil de l'histoire, Suika gagne en confiance et en compétences grâce à son travail acharné et à sa détermination à aider ses amis. Elle passe d'une jeune timide à une membre essentielle du groupe, contribuant activement à la survie et à la prospérité du Royaume de la Science.",
        role_dans_histoire: "Suika joue un rôle crucial dans la collecte d'informations et l'exploration pour le Royaume de la Science. En utilisant ses compétences uniques et sa perspective unique, elle contribue à la mission de réinvention de la technologie et à la reconstruction de la civilisation humaine dans le monde post-pétrification."},

        { name: "KOHAKU", img: "../images/kohakureponseok.webp", link: "../personnage/personnagekohaku.html",
    
        apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
        role: "Kohaku est une guerrière habile et intrépide dans 'Dr. Stone', résidant dans la tribu de la Grue. Elle se joint au Royaume de la Science pour explorer et comprendre les mystères de la technologie moderne, tout en protégeant ses proches et en défendant ses convictions.",
        personnalite: "Kohaku est courageuse, dévouée et passionnée. Elle est déterminée à protéger ceux qui lui sont chers et à défendre ce en quoi elle croit. Elle a un esprit vif et une capacité innée à s'adapter aux situations difficiles.",
        competences: "Kohaku excelle dans les arts martiaux et la survie en milieu sauvage. Elle possède une force physique impressionnante et une agilité remarquable, ce qui en fait une alliée précieuse dans les expéditions et les combats.",
        apparence: "Kohaku a des cheveux rouges longs attachés en une queue de cheval et des yeux verts vifs. Elle porte souvent des vêtements traditionnels de sa tribu, conçus pour la mobilité et la protection.",
        relations: "Kohaku entretient des relations étroites avec sa sœur Ruri et d'autres membres de la tribu de la Grue. Elle développe également un lien particulier avec Senku et les membres du Royaume de la Science, partageant leur quête de connaissances et de progrès.",
        evolution_du_personnage: "Tout au long de l'histoire, Kohaku élargit son horizon en explorant les possibilités offertes par la science moderne. Elle passe d'une protectrice locale à une exploratrice et combattante globale, tout en conservant son dévouement envers sa tribu et ses valeurs.",
        role_dans_histoire: "Kohaku apporte une expertise dans la survie et la protection physique au Royaume de la Science. Elle joue un rôle crucial dans les explorations et les confrontations avec d'autres groupes, tout en apportant une perspective unique en tant que membre de la tribu de la Grue."},

        { name: "RURI", img: "../images/Rurireponseok.jpeg", link: "../personnage/personnageruri.html",
        apparition: "Manga \"Dr. Stone\" créé par Riichiro Inagaki et illustré par Boichi.",
        role: "Ruri est une figure centrale dans 'Dr. Stone', étant la prêtresse de la tribu de la Grue et la sœur aînée de Kohaku. Elle incarne la sagesse ancienne et est essentielle pour comprendre les origines de la pétrification et les traditions de leur communauté.",
        personnalite: "Ruri est sage, calme et bienveillante. Elle possède une connaissance approfondie des coutumes de leur tribu et des légendes entourant la pétrification. Elle est respectée pour sa sagesse et sa vision à long terme.",
        competences: "Ruri est une experte dans les traditions et les rituels de leur tribu. Elle possède également des connaissances sur les herbes médicinales et les méthodes de guérison traditionnelles, ce qui la rend indispensable à la communauté.",
        apparence: "Ruri a des cheveux noirs longs et des yeux marron doux. Elle porte souvent des vêtements traditionnels de sa tribu, ornés de symboles culturels significatifs.",
        relations: "Ruri est proche de sa sœur Kohaku et entretient des liens profonds avec les autres membres de leur tribu. Elle développe également une relation respectueuse avec Senku et les membres du Royaume de la Science, reconnaissant leur potentiel pour aider leur communauté.",
        evolution_du_personnage: "Au fur et à mesure que l'histoire progresse, Ruri découvre de nouvelles perspectives sur la pétrification et l'importance de l'avancement scientifique pour leur communauté. Elle élargit son rôle de prêtresse à celui d'une médiatrice entre les traditions anciennes et les nouvelles découvertes scientifiques.",
        role_dans_histoire: "Ruri joue un rôle crucial en tant que gardienne de la connaissance ancienne et en tant que clé pour comprendre les mystères de la pétrification dans 'Dr. Stone'. Son rôle de prêtresse guide la tribu de la Grue et facilite leur collaboration avec le Royaume de la Science pour un avenir commun."},

        { name: "KASEKI", img: "../images/kaseki-foto.jpg", link: "../personnage/personnagekaseki.html" },
        { name: "MAGMA", img: "../images/magma.jpg", link: "../personnage/personnagemagma.html" },
        { name: "GENRO", img: "../images/Ginroreponseok.webp", link: "../personnage/personnagegenro.html" },
        { name: "KINRO", img: "../images/Kinroreponseok.webp", link: "../personnage/personnagekinro.html" },
        { name: "BYAKUYA", img: "../images/Byakuya_Ishigami_Anime.webp", link: "../personnage/personnageginkaku.html" },
        { name: "KOKUYOU", img: "../images/Kokuyou2.jpg", link: "../personnage/personnagekokuyo.html" },

        { name: "LILLIAN", img: "../images/Tilller.webp", link: "../personnage/personnagetiller.html" },
        { name: "CONNIE", img: "../images/Nickel.webp", link: "../personnage/personnagenickel.html" },
        { name: "SHAMIL", img: "../images/Aluminium.webp", link: "../personnage/personnagealuminium.html" },
        { name: "DARYA", img: "../images/Flint.webp", link: "../personnage/personnageflint.html" },
        { name: "YUKOV", img: "../images/Jade.webp", link: "../personnage/personnagejade.html" },
        { name: "REI", img: "../images/Dress.webp", link: "../personnage/personnagedress.html" },
        { name: "MECA", img: "../images/Taiwan.webp", link: "../personnage/personnagetaiwan.html" },

        { name: "NIKKIE", img: "../images/Robert.webp", link: "../personnage/personnagerobert.html" },
        { name: "UKYO", img: "../images/Miyamura.webp", link: "../personnage/personnagemiyamura.html" },
        { name: "HYOGA", img: "../images/Hiruma.webp", link: "../personnage/personnagehiruma.html" },
        { name: "YO", img: "../images/Tetsuya.webp", link: "../personnage/personnagetetsuya.html" },
        { name: "MINAMI", img: "../images/Kyuuma.webp", link: "../personnage/personnagekyuuma.html" },
        { name: "HOMURA", img: "../images/Chalk.webp", link: "../personnage/personnagechalk.html" },
        
        { name: "SUISEKI", img: "../images/Suiseki.webp", link: "../personnage/personnagesuiseki.html" },
        { name: "TOOYAMA", img: "../images/Tooyama.webp", link: "../personnage/personnagetooayma.html" },
    ];



    const gallery = document.querySelector(".gallery");
    const detailsSection = document.getElementById("character-details");
    const closeDetailsBtn = document.getElementById("close-details");

    characters.forEach(character => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="box-perso">
                <img src="${character.img}" alt="${character.name}">
                <div class="text-carte-perso">
                    <a href="#" class="character-link" data-name="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </div>
            </div>
        `;

        gallery.appendChild(listItem);

        // Ajouter un événement click pour chaque lien de personnage
        listItem.querySelector('.character-link').addEventListener('click', function(event) {
            event.preventDefault();
            showCharacterDetails(character);
        });
    });

    closeDetailsBtn.addEventListener('click', function() {
        detailsSection.style.display = 'none';
    });

    function showCharacterDetails(character) {
        document.getElementById("character-name").innerHTML = `<p><span>Nom :</span> ${character.name}</p>`;
        // document.getElementById("character-image").innerHTML = `<img src="${character.img}" alt="Image du personnage">`;
        document.getElementById("character-apparition").innerHTML = `<p><span>Apparition :</span> ${character.apparition}</p>`;
        document.getElementById("character-role").innerHTML = `<p><span>Rôle :</span> ${character.role}</p>`;
        document.getElementById("character-personnalite").innerHTML = `<p><span>Personnalité :</span> ${character.personnalite}</p>`;
        document.getElementById("character-competences").innerHTML = `<p><span>Compétences :</span> ${character.competences}</p>`;
        document.getElementById("character-apparence").innerHTML = `<p><span>Apparence :</span> ${character.apparence}</p>`;
        document.getElementById("character-relations").innerHTML = `<p><span>Relations :</span> ${character.relations}</p>`;
        document.getElementById("character-evolution").innerHTML = `<p><span>Évolution du personnage :</span> ${character.evolution_du_personnage}</p>`;
        // document.getElementById("role_dans_histoire").innerHTML = `<p><span>Rôle dans histoire :</span> ${character.role_dans_histoire}</p>`;
    
        detailsSection.style.display = 'block';
    }
    




    // rechercher un perso par son nom
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toUpperCase();
        filterCharacters(searchTerm);
    });
    
    function filterCharacters(searchTerm) {
        const filteredCharacters = characters.filter(character => 
            character.name.toUpperCase().includes(searchTerm)
        );
    
        gallery.innerHTML = ''; // Clear the gallery
    
        filteredCharacters.forEach(character => {
            const listItem = document.createElement("li");
    
            listItem.innerHTML = `
                <div class="box-perso">
                    <img src="${character.img}" alt="${character.name}">
                    <div class="text-carte-perso">
                        <a href="#" class="character-link" data-name="${character.name}">
                            <h2>${character.name}</h2>
                        </a>
                    </div>
                </div>
            `;
    
            gallery.appendChild(listItem);
    
            // Ajouter un événement click pour chaque lien de personnage
            listItem.querySelector('.character-link').addEventListener('click', function(event) {
                event.preventDefault();
                showCharacterDetails(character);
            });
        });
    }

   
    
});







// js pour le caroussel des personnages
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


