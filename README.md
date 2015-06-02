# Utilisation

## Produits

Pour ajouter un produit, créer un nouveau fichier dans le dossier
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
category: accessoires (la catégorie du produit)
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
Le reste du contenu du fichier correspond au contenu de la page produit. Il doit être écrit en format Markdown (par exemple avec [prose.io](http://prose.io). Il est également possible d'y intégrer du code HTML.

## Images

Placez simplement les images dans le dossier
```
images
```
