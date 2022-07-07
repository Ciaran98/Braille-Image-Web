<template>
  <div class="home-text">
    <hr />
    <h1>Image conversion</h1>
    <p>
      This page allows you to upload an Image, and recieve a version of that
      image made from braille unicode characters. To use it, use the form below
      to add an image, and press the submit button to upload it to the server.
      No images are saved on this site, the website takes your submitted image,
      and converts it to a stream of bits to be used by an algorithm.
      <u>Nothing is saved</u>.
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "home-component",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: 300;
}
</style>
