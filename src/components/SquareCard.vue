<template>
  <div class="square-card-wrapper">
    <div class="relative">
      <div class="absolute p-8 text-white text-3xl font-bold">{{title}}</div>
      <img :src="img" class="w-full">
      <div class="absolute bottom-24 p-8 text-white text-lg">View Now</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SquareCard',
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    }
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom-24 {
    bottom: 10px;
  }
</style>
