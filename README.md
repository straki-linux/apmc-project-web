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
2. **Héro plein écran** : fondu entre `images/accueil-1.jpg` et `images/accueil-2.jpg`, avec le
   titre « Des milliers de chiens et leurs propriétaires nous font confiance ».
3. **Chiffres clés** : 2593 clients, 2764 chiens et 22 ans, animés à l'apparition.
4. **Cartes** : Qui suis-je ?, Nos services et Contact.
5. **Qui suis-je ?** : photo `images/fondateur-chiens.jpg` avec le badge
   « La passion · La qualité · Le sérieux » (`images/badge-valeurs.png`) et un
   lien vers `fondateur.html`, suivis des liens Instagram @eduquermonchien,
   Facebook et Instagram @madein.shaina.
6. **Galerie** : les 8 photos de chiens de `images/galerie/` défilent en continu
   (pause au survol). Un clic agrandit la photo. Ce bandeau est aussi sur la page
   Qui suis-je.
7. **Appel à l'action** « Parlons de votre chien », avec le lien Instagram
   @eduquermonchien.
8. **Partenaires** : bandeau « Nos partenaires » qui défile sur toutes les pages,
   avec les logos de `images/partners/` : Purina Dog Chow, Purina Pro Plan,
   Belcando, Made In Shaïna et The Canny Company. Leonardo est affiché en texte
   en attendant le fichier de son logo.
9. **Pied de page** : liens, Instagram et copyright.

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

## Logo

Le logo APMC fourni est décliné en trois fichiers :

- `images/logo-apmc-entete.png` : le chien à lunettes et le crayon, sur fond
  transparent. Il est affiché en haut de page à côté du texte « APMC · Éducation
  canine », écrit dans la police arrondie Quicksand, proche de celle du logo ;
- `images/logo-apmc.png` : le logo complet, dans le pied de page et les données
  pour Google ;
- `images/favicon.png` : l'icône de l'onglet du navigateur et de l'écran
  d'accueil du téléphone.

## Pages intérieures

Les quatre pages du menu ont maintenant le même design : même en-tête, mêmes
couleurs, même pied de page avec l'adresse, le téléphone, l'email, Instagram et
Facebook. Elles utilisent toutes `css/site.css` et `js/site.js`.

- **`fondateur.html` (Qui suis-je ?)** : Emmanuel Lamy, éducateur canin. Elle
  reprend le texte d'origine, la photo et le badge « La passion · La qualité ·
  Le sérieux », les liens Instagram @eduquermonchien, Facebook et Instagram
  @madein.shaina, l'appel à l'action et les partenaires.
- **`nos-services.html`** : le texte d'introduction, les 6 services (liens vers
  leurs pages détaillées) et les 3 avis clients avec la photo de Sam Hatami et de
  Hamlet Navassartian (`images/avis/`), et un « J » pour Jeremy Benero, qui n'a
  pas de photo de profil.
- **`contact.html`** : l'adresse, le téléphone et l'email (cliquables), les
  horaires, les réseaux sociaux et une carte Google Maps de l'adresse.

## Transitions entre les pages

Quand on change de page, l'en-tête reste en place pendant que le contenu
s'efface puis réapparaît en glissant. L'effet est le même partout :

- **Chrome, Edge, Opera, Brave, Samsung Internet, Safari 18.2+** : View
  Transitions natives du navigateur, en CSS (`@view-transition`) ;
- **Firefox et navigateurs plus anciens** : un petit script dans `<head>`
  détecte l'absence de transitions natives et pose la classe `no-vt` sur
  `<html>`. `js/site.js` fait alors disparaître le contenu au clic sur un lien
  interne, puis la page suivante apparaît avec la même animation.

Le retour arrière est géré (la page revient affichée). Les liens externes,
mail, téléphone et la visionneuse ne sont pas concernés. Tout est désactivé si
le réglage « réduire les animations » est actif.

## Fichiers

Toutes les images utilisées sont dans le dépôt (`images/`). Il reste deux choses
hors du dépôt :

- le logo Leonardo, à ajouter dans `images/partners/` ;
- les pages de détail des services, toujours dans l'ancien thème :
  `cours-individuels-d-education-canine.html`, `education-en-ville.html`,
  `rappel-au-maitre.html`, `problemes-comportementaux.html`,
  `sorties-quotidiennes.html`, `alimentation.html`.
