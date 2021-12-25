<template>
  <div class="part-card-wrapper grid grid-cols-2 gap-4 relative mb-4">
    <div class="bg-center parts-img shadow-lg" :style="{ 'background-image': `url(${img})` }"></div>
    <div>
      <div class="font-bold text-lg">{{title}}</div>
      <div class="text-sm mb-4">{{description}}</div>
      <div><a :href="href" target="_blank">More Info</a></div>
    </div>
  </div>
</template>

<script>
import Limitless from '@/assets/Limitless.jpg'
import Skate from '@/assets/Skate.jpg'

export default {
  name: 'PartCard',
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    }, 
    description: {
      type: String
    },
    href: {
      type: String
    }
  },
  data() {
    return {
      Limitless,
      Skate
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .parts-img {
    width: 100%;
    height: 200px;
    background-position: 75%;
    background-size: cover;
    background-repeat: no-repeat
  }

  .gradient-nav-bar {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 20%, rgba(6,6,75,0) 70%, rgba(0,0,0,1) 100%);
  }
</style>
