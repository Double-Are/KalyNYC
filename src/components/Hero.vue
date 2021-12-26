<template>
  <div class="hero-wrapper relative w-full">
    <div class="absolute gradient-nav-bar w-full h-full z-20"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 z-10">
      <div class="relative">
        <div class="absolute gradient-bottom-card-text w-full h-full"></div>
        <div class="absolute text-white z-10 px-8 bottom-0 py-10 sm:py-20">
          <div class="text-xl mb:text-2xl lg:text-4xl mb-2 lg:mb-6">Limitless Ride</div>
          <div class="text-base lg:text-lg">Designed to satisfy all the requirements of todays riders and pushing the boundaries of what is possible on esk8, gone are the days of compromising and settling for one riding style or another.</div>
        </div>
        <div :style="{ 'background-image': `url(${Limitless})` }"></div>
        <img :src="Limitless" class="w-full">
      </div>

      <div>
        <div :style="{ 'background-image': `url(${Skate})` }"></div>
        <img :src="Skate" class="w-full">
      </div>
    </div>
  </div>
</template>

<script>
import Limitless from '@/assets/Limitless.jpg'
import Skate from '@/assets/Skate.jpg'

export default {
  name: 'Hero',
  props: {},
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
  .gradient-nav-bar {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 20%, rgba(6,6,75,0) 70%, rgba(0,0,0,1) 100%);
  }

  .gradient-bottom-card-text {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 80%);
  }
</style>
