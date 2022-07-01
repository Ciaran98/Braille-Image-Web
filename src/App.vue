<template>
<h1>Image to Braille</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap');
#app {
  margin-left:5vw;
  margin-right:5vw;
  font-family: 'Gantari', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav a {
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

</style>
