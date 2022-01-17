## client-chat-web-ii
#PYJAMA PARTY
-----------------------------------------
Pyjama Party est une interface de chat interactive qui s'efforce d'offrir un univers convoquant l'enfance et la naïveté qui lui est liée. Vaguement fondée sur le jeu vidéo Earthbound (1994), sorti sur la SNES, et de sa suite sur GBA (Mother 3, 2006), le projet s'appuie à la fois sur l'étrange (tout est possible quand on a sept ans) et la vulnérabilité. De l'excitation de découcher chez son meilleur ami jusqu'aux compétitions féroces autour de la console de jeu en passant par la puissance rassurante du sourire maternel, c'est ce chapitre de la vie que Pyjama Party exploite. Un chapitre que l'on traîne en soi comme un trésor persistant et silencieux.

## PAGE D'ACCUEIL (welcome.html)
+ Le titre s'anime comme un coeur battant. Une fonction construite à l'aide de setTimeouts et qui se rappelle elle-même permet une boucle infinie. L'effet est produit en changeant l'espacement entre les lettres et l'effet CSS text-shadow.

+ Un UFO gravite autour du curseur sans jamais se stabiliser. Pour ce faire, on utilise une vélocité qui permet une accélération du sprite couplée à une inversion de la direction. Grâce à cette inversion périodique, le sprite n'est jamais au repos. Enfin, une vélocité maximale modérée l'empêche de sortir sans cesse de l'écran.

+ Le UFO génère des particules qui marquent son mouvement. À chaque tick de l'instance UFO, un particule (qui est un Objet) est créé autour du centre du sprite. L'opacité de la particule de mouvement est quant à elle gérée à l'aide d'une animation CSS.

+ Lorsque le nom de utilisateur est saisi, celui-ci est mise à jour automatiquement au-dessus du UFO. À chaque tick de la page, la valeur de l'input pertinent est assigné en avec .innerText à une div en position absolue par rapport au UFO.

+ Des étoiles sont générées aléatoirement en fond. Ce sont toutes des objets de la classe Star. La "generatingStars()" a été codée pour gérer différents paramètres, dont la hauteur minimale à laquelle une éoitle peut s'afficher afin qu'elle n'apparaissent pas sur les nuages, par exemples. Ici encore, l'opacité a été géré par CSS (mais ce n'est pas le cas dans l'ensemble du projet).

+ Une image de fond (les nuages mauves) défile sans cesse à l'aide de la propriété CSS background-repeat : repeat; et d'un effet de déplacement (offset-x ) à chaque tick de la page.

+ Enfin, les éléments interactifs du footer utilisent une redirection en javascript, puisque ce ne sont pas des balise de lien mais des div.

## PAGE D'ENREGISTREMENT (register.html)
+ L'image animée de Ness qui sommeil est gérée en boucle infinie grâce à une fonction setTimeout qui se rappelle elle-même. Le framerate est décidé arbitrairement. 

+ Il est possible de cliquer sur le cadeau pour découvrir un secret. L'élément du cadeau utilise une variable d'état pour empêcher l'utilisateur de l'ouvrir à l'infi et de pouvoir faire apparaître la boîte de dialogue (voir prochain élément).

+ Une boîte de dialogue après avoir cliqué sur le cadeau. Son mouvement est inspiré de l'exemple des ballons de soccer vu en classe. Une classe a été créée pour la boîte de dialogue afin de pouvoir la réutiliser ailleur et avec différents paramètres si nécessaire. Par exemple, l'animation (rebond et disparition) dure plus longtemps ici, car on veut mettre l'emphase sur la valeur d'avoir découvert un secret.

+ Des oiseaux sont générés aléatoirement depuis la gauche de la fenêtre. La classe TiledImage codée et fournie par le professeur est utilisé dans ce cas. Pour générer les oiseaux, une autre fonction que l'on retrouve dans le fichier .utils.js a été codée afin de varier les paramètres au besoin. Il s'agit de generatingBirds();

+ Des étoiles sont générées sur cette page également grâce à la fonction generatingStars();

## PAGE DE CHAT (chat.html)
+ À chaque fois que le serveur rafraîchit la liste des membres en ligne, les noms de ceux-ci sont affichés/supprimés en autant de div que nécessaire grâce au document.createElement("div");

+ Lorsqu'on clique sur un membre en ligne, la boîte de saisi de texte est automatiquement paramétrée pour être focusé et envoyer un message privé au membre sur lequel on a cliqué. Pour ce faire, on récupère le nom du membre en ligne dans le tableau envoyé par le serveur, on assigne la valeur du textarea selon cette donnée et on a la focus avec .focus().

+ Il est possible de changer dynamiquement les couleurs de la page avec le bouton Change Outfit. Une fonction disponible dans utils.js est appelée. Elle permet de changer les variables CSS. De plus, le nom du thème s'affiche brièvement au-dessus du bouton. Il s'agit d'un objet de classe ThemeName qui est créé.

+ Des boutons de type toggle (Starry Nigh, Gentle Rain, Soothing Snow) permettent d'activer et de désactiver des effets à volonté. Pour ce faire, nous utilisons une classe ToggleButton pour permettre facilement des boutons qui s'excluent automatiquement au besoin (Gentle Rain et Soothing Snow).

+ Ces deux boutons activent tous deux des fonctions répétées un certain nombre de fois pour gérer des effets météos. La pluie pourrait être plus réaliste, mais nous avons voulu conserver l'esthétique pixel art du projet.

+ Un bouton (Starry Night) est disponible pour activer la fonction generatingStars() présente sur les autres pages;

+ Le bouton Feed Me génère des frigos qui tombent du ciel. Une séquence d'animation complexe est gérée à l'aide de setTimeouts et de variables d'états. Enfin, la boîte de dialogue est récupérée ici. Une table de résultats aléatoires a été programmée avec des sons variables.

+ Le bouton Brag A Little génère un texte automatiquement dans la boîte de saisi avec certaines informations produites par l'interaction avec les frigos et le nombre de membres en ligne.

+ Le reste des petites animations (survol d'un membre ou d'un message) sont codés en CSS, tout comme l'animation néon du mot ONLINE.

## CRÉDITS
+ Sprites divers, background mosaïque et sons (excepté caisse enregistreuse) : Nintendo et sa série Mother (mieux connue en occident sous le nom Earthbound)
+ Nuages divers : Savvy Cow, https://savvycow.itch.io/loudypixelsky