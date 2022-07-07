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
          ><img
            class="ico linkedInIco"
            src="../public/linkedin.svg"
            alt="LinkedIn"
          /><br />
          LinkedIn</a
        >
      </li>
      <li>
        <a href="mailto:ciaran.melarkey@hotmail.com"
          ><img
            class="ico greyIco"
            src="../public/envelope.svg"
            alt="Email"
          /><br />
          Email</a
        >
      </li>
      <li>
        <a href="https://github.com/Ciaran98"
          ><img
            class="ico greyIco"
            src="../public/github.svg"
            alt="GitHub"
          /><br />
          GitHub</a
        >
      </li>
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
.ico {
  width: 34px;
}
.greyIco {
  filter: invert(5%) sepia(52%) saturate(13%) hue-rotate(322deg) brightness(96%)
    contrast(74%);
}
.linkedInIco {
  filter: invert(26%) sepia(97%) saturate(1279%) hue-rotate(176deg)
    brightness(100%) contrast(103%);
}
div.footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
}
ul {
  all: unset;
  max-width: fit-content;
}
li {
  justify-content: center;
  font-size: 20px;
  list-style: none;
  text-align: center;
  float: left;
  padding: 10px 60px;
}
li:hover {
  background-color: #e0e0e0;
  border-radius: 6px;
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
  ul {
    width: 100%;
  }
  li {
    font-size: 15px;
    padding: 10px 20px;
  }
  p {
    font-size: 14px !important;
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
