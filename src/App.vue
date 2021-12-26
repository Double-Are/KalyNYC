<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 2000px;
  margin: 0 auto;
}
</style>
