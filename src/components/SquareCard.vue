<template>
  <div class="square-card-wrapper">
    <a :href="href" class="block relative">
      <h3 class="absolute py-4 px-8 md:p-8 text-white text-3xl font-bold z-20">{{title}}</h3>
      <img :src="img" class="w-full" :alt="`${title} Product Image`" >
      <div v-if="!noView" class="absolute bottom-24 py-2 px-8 md:p-8 text-white text-lg">View Now</div>
    </a>
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
    },
    noView: {
      type: Boolean
    },
    href: {
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
  .square-card-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .square-card-wrapper img {
    transition: transform 0.4s;
  }
  .square-card-wrapper:hover img {
    transform: scale(1.5);
  }
</style>
