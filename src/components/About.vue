<template>
  <div class="about-text">
    <h1>About Me!</h1>
    <p>
      Hi! Welcome to my Image to Braille conversion app! My name is Ciarán
      Melarkey. I am a graduate from the Letterkenny Institute of Technology. I
      am an aspiring web developer with a great interest in learning new
      technologies and languages. I primarily developed this website to learn
      Vue.js. I originally developed the image conversion just using Node.js,
      but I wanted to expand the scope of the project by including an interface
      for the user to convert their images.
    </p>
  </div>
</template>

<script>
export default {
  name: "about-component",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #080808;
  text-align: justify;
}

h1,
h2 {
  font-weight: 300;
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
</style>
