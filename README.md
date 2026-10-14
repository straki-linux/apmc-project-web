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
- **jQuery en HTTPS** : l'ancien lien `http://` était bloqué par les navigateurs
  sur un site en `https`. jQuery est maintenant chargé avant `contact.js`.
- **`button.js`** chargé en chemin relatif (fonctionne aussi en local).
- **Référencement** : titre et meta description, balises Open Graph (aperçu lors
  d'un partage), données structurées `LocalBusiness`, URL canonique, un vrai `<h1>`.
- **Accessibilité** : textes alternatifs pour toutes les images, lien
  « Aller au contenu », zones `<main>`/`<footer>`, menu mobile utilisable au
  clavier, respect du réglage « réduire les animations ».
- **Performance** : chargement différé des images (`loading="lazy"`),
  préchargement de l'image principale, dimensions des images de la galerie.
- **Contenu** : section « Découvrir » (Qui suis-je, Services, Contact),
  appel à l'action « Parlons de votre chien », liens dans le pied de page,
  année du copyright mise à jour automatiquement.
