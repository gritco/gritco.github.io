# Utilisation

## Pages du site

Pour ajouter une page, créez un nouveau fichier dans le dossier à la racine du projet avec un nom au format suivant :
```
nom-de-la-page.html
```
par exemple
```
nouvelle-page.html
```
ou copiez et renommez le fichier d'une page existante.

Le début du fichier doit contenir les lignes suivantes :
```
---
layout: page (ne pas modifier)
title: Origines de l'hydrogommage (titre de la page)
navtitle: Origines (le nom du lien de la page dans le menu principal du site)
(ou dans le cas où le lien est dans un sous-menu
	navparent: about (le nom du menu parent)
	subnavtitle: Hydrogommage (le nom du lien)
)
position: 2 (la position du lien dans le menu ou dans le sous-menu)
permalink: /hydrogommage/ (le lien de la page, ici on aura par exemple http://gritco-fvb.fr/hydrogommage/ )
---
```

Il est également possible, plutôt que de rajouter les lignes précédentes dans le fichier, de passer par l'éditeur de meta-données de [prose.io](http://prose.io). Dans ce cas, n'ajoutez pas les triples-tirets --- avant et après.

Le reste du contenu du fichier correspond au contenu de la page. Il doit être écrit au format HTML.

## Produits

Pour ajouter un produit, créez un nouveau fichier dans le dossier
```
_posts/produit
```
avec un nom au format suivant :
```
annee-mois-jour-NomDuProduit.md
```
par exemple
```
2015-6-15-NouveauProduit.md
```
ou copiez et renommez un fichier de produit existant dans le dossier.

Le début du fichier doit contenir les lignes suivantes :
```
---
layout: product (ne pas modifier)
category: accessoires (la catégorie du produit voir la partie "Catégories")
title: Armex® (le titre de la page du produit)
namepart1: Micro (la partie du nom qui apparaîtra en rouge)
namepart2: Strip™ (la partie du nom qui apparaîtra en bleu)
images: (une liste d'images au format .jpg ou .png qui apparaîtront dans le carousel, voir la partie "Images" pour ajouter les images)
  - microstrip1.jpg
  - microstrip2.jpg
  - microstrip3.jpg
published: true (ne pas modifier)
position: 2 (la position du produit dans la liste des produits)
---
```

Il est également possible, plutôt que de rajouter les lignes précédentes dans le fichier, de passer par l'éditeur de meta-données de [prose.io](http://prose.io). Dans ce cas, n'ajoutez pas les triples-tirets --- avant et après.

Le reste du contenu du fichier correspond au contenu de la page produit. Il doit être écrit en format Markdown (par exemple avec [prose.io](http://prose.io). Il est également possible d'y intégrer du code HTML.

## Images

Placez simplement les images dans le dossier
```
images
```

## Catégories

Les catégories disponibles sont :

- aerohydrogommage
- sablage
- mat spéciaux
- accessoires

Les noms des catégories doivent être saisis exactement de la même manière.
