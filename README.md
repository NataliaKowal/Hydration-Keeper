# Hydration Keeper

A web app for tracking daily water intake, built with **Vue.js**. It shows how much of your daily goal you have reached, lets you pick drinks from a carousel and displays weekly statistics on a chart.

> **Status:** front-end prototype. The views and layout are in place; the progress and statistics currently use sample data, and the MongoDB connection is not wired up yet.

## Features

- **Daily Progress**: a water drop that fills up as you get closer to your daily goal, with the percentage shown below.
- **Add Drinks**: a carousel with drinks to choose from (coffee 250 ml, glass of water 300 ml, bottle of water 500 ml).
- **Statistics**: a bar chart of drinks consumed (in ml) for each day of the week.
- **About**: the technologies used in the project.

## Tech stack

- Vue 3 and Vue Router
- Chart.js with vue-chartjs (statistics chart)
- vue3-carousel (drink picker)
- MongoDB (planned data storage)
- Docker Compose

## Project structure

```
Hydration-Keeper/
├── compose.yaml        # Docker Compose: Vue dev server + MongoDB
└── website/            # Vue.js application
    └── src/views/      # HomeView, AddDrinks, StatisticsView, AboutView
```

## Getting started

### Option 1: Docker Compose

Requires Docker with Docker Compose.

```sh
docker compose up
```

This starts two containers:

| Service | Container | Port | Description |
|---|---|---|---|
| `vue-app` | `vue-app` | 8080 | Installs dependencies and runs the Vue dev server |
| `mongo` | `mongo-db` | 27017 | MongoDB with data stored in the `mongo-data` volume |

Open `http://localhost:8080` in your browser.

### Option 2: run locally

Requires Node.js 16+ and npm.

```sh
cd website
npm install
npm run serve
```

## Roadmap

- Save added drinks and update the daily progress
- Store the drink history in MongoDB through a back-end API
- Build the statistics chart from real data
- Let users set their own daily goal

## Author

Natalia Kowal
