<template>
  <div class="hero-wrapper relative w-full">
    <div class="absolute gradient-nav-bar w-full h-full z-20"></div>
    <div class="grid grid-cols-1 md:grid-cols-2 z-10">
      <div class="relative hidden sm:block">
        <div class="absolute gradient-bottom-card-text w-full h-full"></div>
        <div class="absolute text-white z-20 px-8 bottom-0 py-10 sm:py-20">
          <div class="text-xl mb:text-2xl lg:text-4xl mb-2 lg:mb-6 font-medium">Limitless Ride</div>
          <div class="text-base lg:text-lg">Designed to satisfy all the requirements of todays riders and pushing the boundaries of what is possible on esk8, gone are the days of compromising and settling for one riding style or another.</div>
        </div>
        <div :style="{ 'background-image': `url(${Limitless})` }"></div>
        <img :src="Limitless" class="w-full" alt="Kaly Flag" />
      </div>

      <div class="relative">
        <div :style="{ 'background-image': `url(${XL40GIF})` }" class="absolute w-full h-full bg-cover bg-center"></div>
        <img :src="Limitless" class="opacity-0" alt="GIF Kaly XL40 Skater">
      </div>
    </div>
    <div class="absolute text-white z-20 px-8 bottom-0 py-10 sm:py-20 block sm:hidden font-medium">
      <div class="text-xl mb:text-2xl lg:text-4xl mb-2 lg:mb-6">Limitless Ride</div>
      <div class="text-sm lg:text-lg">Designed to satisfy all the requirements of todays riders and pushing the boundaries of what is possible on esk8, gone are the days of compromising and settling for one riding style or another.</div>
    </div>
  </div>
</template>

<script>
import Limitless from '@/assets/Limitless.jpg'
import XL40GIF from '@/assets/XL40-GIF.gif'

export default {
  name: 'Hero',
  props: {},
  data() {
    return {
      Limitless,
      XL40GIF
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gradient-nav-bar {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 80%, rgba(6,6,75,0) 70%, rgba(0,0,0,1) 100%);
  }

  .gradient-bottom-card-text {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 80%);
  }
</style>
