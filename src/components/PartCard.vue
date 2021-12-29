<template>
  <div class="part-card-wrapper relative mb-4">
    <a class="grid grid-cols-2 gap-4" :href="href" target="_blank">
      <div class="overflow-hidden">
        <div class="bg-center parts-img shadow-lg part-img" :style="{ 'background-image': `url(${img})` }"></div>
      </div>
      <div>
        <div class="font-bold text-lg">{{title}}</div>
        <div class="text-sm mb-4">{{description}}</div>
        <div class="text-sm underline underline-offset">More Info ></div>
      </div>
    </a>
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

  .underline-offset {
    text-underline-offset: 2px;
  }

  .part-card-wrapper {
    width: 100%;
    position: relative;
  }
  .part-card-wrapper .part-img {
    transition: transform 0.4s;
  }
  .part-card-wrapper:hover .part-img {
    transform: scale(1.5);
  }
</style>
