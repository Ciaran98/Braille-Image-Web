<template>
  <div class="about-text">
    <hr />
    <h1>What is Image to Braille?</h1>
    <p>
      Welcome to my Image to Braille conversion site! This website allows you to
      upload an image, and convert it to braille, where one pixel from the image
      is equal to one dot on a braille unicode character. When an image is
      uploaded, the app will first convert it to the bitmap file format, it will
      then color the background if the image is PNG, and then resize the image.
      Once the file is a bitmap image, the algorithm will iterate through the
      image in 2 x 4 chunks, this is because each braille unicode character is 2
      x 4 dots in size. Once the whole image has been converted, the data is
      sent back in JSON format, and read into a div, allowing the user to copy
      the data, and use it as they see fit.
    </p>
    <hr />
    <h1>Who am I?</h1>
    <p>
      Hi, my name is Ciarán Melarkey. I am a graduate from the Letterkenny
      Institue of Technology, and I am an aspiring developer. I enjoy coding and
      learning in my spare time, I actually began working on this site because I
      wanted to learn Vue.js. You can check out some of my other work on my
      GitHub, or if you want to see any sites I have created, I will link them
      below.<br /><br />
      <a href="https://apexrandom.web.app/">Apex Randomiser App</a><br /><br />
      <a href="https://ciaran.web.app/">Portfolio Website</a><br /><br />
      Thank you for checking out this site, and if you like what you see, you
      can email me using the link below, I am currently open to work, and I am
      very eager to get started!
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
</style>
