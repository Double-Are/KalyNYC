<template>
  <div class="next-ride-wrapper sm:grid md:flex">
    <div class="text-5xl font-bold mr-4 mb-6">What will be your next ride?</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <router-link to="/product/xlr">
        <div class="xl-collection-product-square">
          <img :src="XLRSquare" />
          <div class="px-10 py-4 text-4xl">XL-R</div>
        </div>
      </router-link>
      <router-link to="/product/xl50">
        <div class="xl-collection-product-square">
          <div><img :src="XL50Square" /></div>
          <div class="px-10 py-4 text-4xl">XL 50</div>
        </div>
      </router-link>
      <router-link to="/product/xl20">
        <div class="xl-collection-product-square">
          <img :src="XL20Square" />
          <div class="px-10 py-4 text-4xl">XL 2.0</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Limitless from '@/assets/Limitless.jpg'
import Skate from '@/assets/Skate.jpg'

import XLRSquare from '@/assets/XLR-square.jpg'
import XL50Square from '@/assets/XL50-square.jpg'
import XL20Square from '@/assets/XL2.0-square.jpg'

export default {
  name: 'NextRide',
  props: {},
  data() {
    return {
      Limitless,
      Skate,
      XLRSquare,
      XL50Square,
      XL20Square
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .xl-collection-product-square {
    max-width: 470px;
    width: 100%;
  }
</style>
