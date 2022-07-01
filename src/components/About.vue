<template>
<div class="about-text">
  <h1>About Me!</h1>
  <p>Hi!<br>
    Welcome to my Image to Braille conversion app!
    My name is Ciarán Melarkey.
    I am a graduate from the Letterkenny Institute of Technology.
    I am an aspiring web developer with a great interest in learning new technologies and languages.<br>
    I primarily developed this website to learn Vue.js.
    I originally developed the image conversion just using Node.js, but I wanted to expand the scope of the project by including an interface for the user to convert their images.
  </p>
  <h2>Contact Me!</h2>
  <ul>
    <li><a href="https://www.linkedin.com/in/ciaran-melarkey-694469194/">Linked In</a></li>
    <li><a href="https://github.com/Ciaran98">GitHub</a></li>
    <li><a href="mailto:ciaran.melarkey@hotmail.com">Email</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "about-component"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul{
  all: unset;
}
li{
  display: inline;
  font-size: 20px;
  font-weight: bold;
  padding:10px 20px;
}
a:visited{
  all: unset;
}
a{
  color: #2c3e50;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
</style>
