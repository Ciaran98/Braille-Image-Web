<template>
  <div class="about">
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'

export default {
  name: 'AboutView',
  components: {
    About
  }
}
</script>
<style>
div > p{
  font-family: 'Gantari', sans-serif;
  font-size: 20px;
}

</style>