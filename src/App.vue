<template>
  <div class="header-nav">
    <h1>Image to Braille</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view />
  <div class="footer">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/ciaran-melarkey-694469194/"
          >Linked In</a
        >
      </li>
      <li><a href="https://github.com/Ciaran98">GitHub</a></li>
      <li><a href="mailto:ciaran.melarkey@hotmail.com">Email</a></li>
    </ul>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap");
body {
  background-color: #f7f7f7;
}
#app {
  margin-left: 10vw;
  margin-right: 10vw;
  font-family: "Gantari", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #080808;
}
div.footer {
  display: flex;
  justify-content: center;
}
ul {
  all: unset;
}
li {
  display: inline;
  font-size: 30px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  list-style: none;
}
a:visited {
  color: #2c3e50;
  text-decoration: none;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
div.header-nav {
  display: flex;
  font-size: 30px;
}
@media (max-width: 768px) {
  div.header-nav {
    flex-direction: column;
  }
  li {
    text-align: center;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
div.header-nav > h1 {
  all: unset;
  padding-right: 20px;
}
nav a {
  color: #080808;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #8f1f17;
  text-decoration: underline;
}
nav a:hover {
  text-decoration: underline;
}
</style>
