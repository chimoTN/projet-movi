# Projet Movie

Il s'agit d'une API REST proposant à un lecteur d'enregistrer les films qu'il a vus au cours de sa vie,
dans sa bilbliothèque virtuelle.

## Fonctionnalités

Un utilisateur peut :

- Afficher ses films
- Afficher les détails d'un film (titre, réalisateur, acteurs, résumé, nombre de vues du film)
- Ajouter un film dans sa liste
- Modifier un film
- Supprimer un film

## Technologies utilisées

- Front-end : React
- Back-end : NodeJs avec le framework NestJs
- Base de données : PostgreSQL

## Gestion de projet

Workflow git utilisé : Features Branches + Merge Request

## Installation

Assurez vous d'avoir docker sur votre machine.
Si vous ne l'avez pas, suivez ce guide 'https://docs.docker.com/get-docker/'

## Lancer le projet

- Copier le dépôt git
```
> git clone https://github.com/melyLaur/Projet_Movie.git
  (or git clone git@github.com:melyLaur/Projet_Movie.git)
> cd Projet_Movie
```
- Lancer la commande suivante 
```
> docker compose build
> docker compose up
```
