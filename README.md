# apmc-project-web

Site web d'**APMC Éducation Canine** (https://www.apmc.fr).

## Page d'accueil modernisée

`index.html` a été entièrement refaite avec un design moderne. Elle garde les
textes, les photos et le logo du site d'origine. Les couleurs reprennent celles
du logo : jaune `#f9b13a` sur noir `#121212`.

Elle ne dépend plus de l'ancien thème : pas de Bootstrap, de jQuery ni de
plugins. Elle n'utilise que :

- `css/site.css` : la feuille de style de la page ;
- `js/site.js` : un petit script sans dépendance, qui gère le menu mobile, le
  fondu du héro, les compteurs, l'apparition au défilement, le bandeau des
  partenaires, la visionneuse de la galerie et l'année du copyright ;
- les polices Google Fonts Fraunces (titres) et Inter (texte) ;
- Google Analytics (G-6EHCMC91XN), inchangé.

### Sections

1. **En-tête fixe** : il devient opaque au défilement. Sur mobile, un menu
   s'ouvre avec le bouton ☰ et se ferme avec Échap.
2. **Héro plein écran** : fondu entre `ACCUEIL3.jpg` et `ACCUEIL2.jpg`, avec le
   titre « Des milliers de chiens et leurs propriétaires nous font confiance ».
3. **Chiffres clés** : 2593 clients, 2764 chiens et 22 ans, animés à l'apparition.
4. **Cartes** : Qui suis-je ?, Nos services et Contact.
5. **Galerie** : les 5 photos de chiens de `images/galerie/` (ajoutées au dépôt),
   en mosaïque (une grande et quatre petites), qui s'agrandissent au clic.
6. **Appel à l'action** « Parlons de votre chien », avec le lien Instagram
   @eduquermonchien.
7. **Partenaires** : bandeau défilant.
8. **Pied de page** : liens, Instagram et copyright.

### Qualité

- **Référencement** : titre, meta description, Open Graph, données
  structurées `LocalBusiness` (avec Instagram) et URL canonique.
- **Accessibilité** : un seul `<h1>`, lien « Aller au contenu », textes
  alternatifs, menu et visionneuse utilisables au clavier, focus visible, respect
  du réglage « réduire les animations ».
- **Sans JavaScript** : tout le contenu reste visible et les chiffres affichent
  leur valeur finale.
- **Performance** : une seule feuille de style et un seul script (contre six
  fichiers CSS/JS auparavant), images chargées en différé.

## Fichiers nécessaires

Ces fichiers du site existant doivent être présents avec les mêmes chemins :

- `images/` : `logo1.jpg`, `ACCUEIL2.jpg`, `ACCUEIL3.jpg`,
  `partners/01–04.jpg`, `partners/05–06.png` ;
- autres pages : `fondateur.html`, `nos-services.html`, `contact.html`.

Ces trois pages utilisent encore l'ancien thème (`css/main.css`, `js/compressed.js`…).
Elles peuvent être refaites avec `css/site.css` sur le même modèle.
