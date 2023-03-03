# Projet Movie
Il s'agit d'une API REST et un front proposant à un lecteur d'enregistrer les films qu'il a vus au cours de sa vie,
dans sa bibliothèque virtuelle.

## Versioning
Workflow git utilisé : Features Branches + Merge Request

## Technologies utilisées

- Front-end : ReactJS
- Back-end : Spring Boot
- Base de données : PostgreSQL

## Fonctionnalités de l’application
Un utilisateur peut :

- Afficher le catalogue des films
- Ajouter un film dans sa liste
- Afficher sa liste
- Afficher les détails d'un film (titre, réalisateur, résumé, nombre de vues du film)
- Modifier un film
- Supprimer un film

# Lancer le projet

## Installation

Assurez-vous d'avoir docker et git sur votre machine.
Si vous ne les avez pas, suivez ces guides : 'https://docs.docker.com/get-docker/' et https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git


- Copier le dépôt git
```
> git clone https://github.com/melyLaur/Projet_Movie.git
  (or git clone git@github.com:melyLaur/Projet_Movie.git)

> cd Projet_Movie
```


## Contribuer

### Recommander : avant d'executer le docker-compose

Mettre des valeurs appropriées dans le ficher .env pour les variables d'environnement suivantes :

`POSTGRES_USER` - `POSTGRES_PASSWORD` - `POSTGRES_DB` - `PORT_DB`

- Pour lancer le projet en entier, executer la commande suivante
```shell
> docker compose up -d
```
- Pour arrêter le projet, executer la commande suivante
```shell
> docker compose down
```

## Déploiement

### Etape 1 : Créer un réseau
```shell
> docker network create libraryNetwork

```

### Etape 2 : Base de données (PostgreSQL)
- Pour lancer la base de données independemment, executer ces commandes

```shell
> cd database_script

> docker build -t db-image .

> docker run --name db-container --network=libraryNetwork -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=docker -d db-image
```

Vous pouvez voir l'initailsation de la base de données en executant les commandes suivantes :

- Rentrer dans le container
```shell
> docker exec -it db-container bin/bash
```

- Puis vous pouvez vous connecter à la base de données docker
```shell
> psql -U postgres -d docker
```

- lister les tables
```shell
> \dt
```

- executer des requêtes SQL comme par exemple :
```shell
> SELECT * FROM t_movie;
```

### Etape 3 : API REST (Spring)
- Pour lancer l'API, executer ces commandes
```shell
> cd starter

> docker build -t api-image .

> docker run --name api-container --network=libraryNetwork -p 8080:8080  -e CONNEXION_DB_HOST=db-container -e CONNEXION_DB_PORT=5432 -e CONNEXION_DB_NAME=docker -e CONNEXION_DB_USER=postgres -e CONNEXION_DB_PASSWORD=postgres -d api-image
```

Vous pouvez lancer des requêtes via postman comme par exemple :
```
ENDPOINT (GET) : localhost:8080/getAllMovies
```

### Etape 4 : IHM (reactJS)
- Pour lancer l'IHM, executer ces commandes
```shell
> cd front/front-api/
> docker build -t front-image .
> docker run --name front-container --network=libraryNetwork -p 3000:3000 -d front-image
```