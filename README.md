<!-- # Dependencies

```sh
npm install vue-chartjs chart.js
```

```sh
npm install vue3-carousel
```

```sh
npm install chart.js
```

## Hydratation keeper application  -->

# Destription
Ten plik docker-compose.yml definiuje konfigurację dla dwóch usług: MongoDB oraz aplikacji Vue.js. Poniżej znajduje się szczegółowy opis każdej z usług oraz ich konfiguracji.

## Front-end
Aplikacja Vue.js jest front-endem aplikacji. Konfiguracja Vue.js w pliku docker-compose.yml obejmuje:

Nazwa kontenera: vue-app
Obraz: node:latest
Katalog roboczy: /app
Volumes: ./website:/app - Montowanie lokalnego katalogu ./website do /app w kontenerze.
Porty: 8080:8080 - Mapowanie portów, aby aplikacja Vue.js była dostępna na porcie 8080 na hoście.
Polecenie startowe: sh -c "npm install && npm run serve" - Instalacja zależności npm i uruchomienie serwera deweloperskiego Vue.js.

## Backend
MongoDB jest bazą danych używaną do przechowywania danych aplikacji. Konfiguracja MongoDB w pliku docker-compose.yml obejmuje:

Nazwa kontenera: mongo-db
Obraz: mongo:latest
Porty: 27017:27017 - Mapowanie portów, aby MongoDB była dostępna na porcie 27017 na hoście.
Volumes: mongo-data:/data/db - Przechowywanie danych MongoDB w wolumenie Docker o nazwie mongo-data.