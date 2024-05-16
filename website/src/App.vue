<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add-drinks">Add Drinks</router-link> |
    <router-link to="/statistics">Statistics</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #e0f7fa; 
  padding: 15px 30px; 
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #00796b; /* Głęboki odcień niebieskiego */
  margin: 0 10px;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s; /* Płynne przejście kolorów */
}

nav a:hover {
  background-color: #b2ebf2; /* Jasny niebieski na hover */
  color: #004d40; /* Ciemniejszy odcień niebieskiego na hover */
}

nav a.router-link-exact-active {
  background-color: #00796b; /* Aktywny link z głębokim niebieskim tłem */
  color: #ffffff; /* Biały tekst dla aktywnego linku */
}
</style>
