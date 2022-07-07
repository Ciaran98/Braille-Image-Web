<template>
  <div class="form-container">
    <form enctype="multipart/form-data">
      <input
        type="file"
        name="uploadImage"
        accept="image/*"
        @change="initImageData($event)"
      />
      <button type="submit" @click="imageUpload($event)">Upload Image</button>
    </form>
  </div>
  <div class="braille-container">
    <p v-if="!buttonClicked">Your converted image will go here</p>
    <pre class="braille-output" v-if="buttonClicked">
    <p>{{brailleThing}}</p>
    </pre>
  </div>
  <hr />
</template>

<script>
import axios from "axios";
const url = "https://braille-image.herokuapp.com/#/";
const FormData = require("form-data");

export default {
  name: "upload-component",
  data() {
    return {
      brailleThing: "",
      buttonClicked: false,
      imageData: "",
    };
  },
  methods: {
    // Capture Image data from Image submission, and save it to imageData variable
    initImageData(event) {
      this.imageData = event.target.files[0];
    },
    // Upload Image to server, receive Image as Braille as a response from the server
    imageUpload(event) {
      event.preventDefault();
      if (this.imageData.length == 0) {
        alert("Please select an Image");
        return;
      }
      let data = new FormData();
      data.append("file", this.imageData);
      this.brailleThing = "";
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.buttonClicked = true;
          this.brailleThing = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 20px;
  text-align: center;
  padding: 20px 10px;
  border-radius: 6px;
  overflow: auto;
}
div.form-container {
  display: flex;
  justify-content: center;
}
div.form-container > form {
  margin: 20px;
  padding: 20px;
}
form > * {
  margin: 10px;
}
@media (max-width: 768px) {
  p {
    font-size: 14px;
    padding: 3px 3px;
  }
}
</style>
