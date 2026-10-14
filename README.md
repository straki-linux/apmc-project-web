# apmc-project-web

Site web d'**APMC Éducation Canine** (https://www.apmc.fr).

## Structure attendue

La page d'accueil (`index.html`) réutilise les fichiers du site existant, qui
doivent être ajoutés au dépôt avec les mêmes chemins :

- `css/` : `bootstrap.min.css`, `animations.css`, `font-awesome.css`, `main.css`
  (+ `custom.css`, ajouté ici)
- `js/` : `vendor/modernizr-custom.js`, `contact.js`, `compressed.js`, `main.js`, `button.js`
- `images/` : `logo1.jpg`, `ACCUEIL2.jpg`, `ACCUEIL3.jpg`, `square/*.jpg`, `partners/*`
- autres pages : `fondateur.html`, `nos-services.html`, `contact.html`

## Améliorations de la page d'accueil

- **Corrections** : balise `<html lang="fr">` manquante, `</ul>` du menu non fermé,
  balise cassée `<div">` dans les partenaires.
- **jQuery en double supprimé** : la page chargeait jQuery 1.11 depuis Google (en
  `http://`, donc bloqué en `https`) alors que `js/compressed.js` contient déjà
  jQuery 3.3.1, qui le remplaçait aussitôt. Une requête et une vieille version de
  jQuery en moins ; `contact.js` est chargé en `defer`.
- **Sans JavaScript** : classe `no-js` sur `<html>` (Modernizr la retire), ce qui
  active les règles de secours déjà prévues par le thème (premier visuel affiché,
  écran de chargement masqué).
- **`button.js`** chargé en chemin relatif (fonctionne aussi en local).
- **Référencement** : titre et meta description, balises Open Graph (aperçu lors
  d'un partage), données structurées `LocalBusiness`, URL canonique, un vrai `<h1>`.
- **Accessibilité** : textes alternatifs pour toutes les images, lien
  « Aller au contenu », zones `<main>`/`<footer>`, menu mobile utilisable au
  clavier, respect du réglage « réduire les animations ».
- **Performance** : chargement différé des images (`loading="lazy"`),
  préchargement de l'image principale, dimensions des images de la galerie.
- **Fidèle au thème** : les titres du carrousel et des chiffres gardent exactement
  les balises que `main.css` met en forme ; les nouvelles sections utilisent les
  couleurs du thème (saumon `#ed8e82`, turquoise `#54c1c4`, bleu nuit `#0a272c`).
- **Correctif CSS** : le `bootstrap.min.css` du site n'a pas de `margin-right: -15px`
  sur `.row` (contenu légèrement décalé à gauche) ; corrigé dans `custom.css`.
- **Contenu** : section « Découvrir » (Qui suis-je, Services, Contact),
  appel à l'action « Parlons de votre chien », liens dans le pied de page,
  année du copyright mise à jour automatiquement.

## À vérifier

- `font-awesome.css` pointe vers des fichiers nommés `fontawesome-webfont﹖v=4.7.0.*`
  (avec un « ﹖ » Unicode, reste d'une copie de site). Vérifier que les fichiers du
  dossier `fonts/` portent bien ces noms, sinon les icônes ne s'affichent pas.
