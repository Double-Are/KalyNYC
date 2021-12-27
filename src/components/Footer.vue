<template>
  <div class="footer-wrapper relative w-full py-2 px-8 bg-gray-900">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-10 text-white">
      <div>
        <div>Website Design by <a class="text-blue-200" href="https://www.instagram.com/double_are/">@Double_Are</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import KalyLogo from '@/assets/Kaly.jpg'

export default {
  name: 'Footer',
  props: {},
  data() {
    return {
      KalyLogo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
