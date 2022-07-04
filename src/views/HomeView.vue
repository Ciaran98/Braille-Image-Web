<template>
  <div class="home">
    <Home />
    <Upload />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Upload from "@/components/Upload.vue";
export default {
  name: "HomeView",
  components: {
    Home,
    Upload,
  },
};
</script>
<style>
div > p {
  font-family: "Gantari", sans-serif;
  font-size: 20px;
}
</style>
