<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="info">
      <p>This project was made using the following technologies:</p>
      <ul>
        <li>Vue.js</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>MongoDB</li>
        <li>Docker</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.info {
  background-color: #e0f7fa;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.info p {
  font-size: 18px;
  color: #00796b;
}

.info ul {
  list-style-type: disc;
  padding-left: 20px;
}

.info li {
  font-size: 16px;
  color: #00796b;
  margin: 5px 0;
}
</style>
