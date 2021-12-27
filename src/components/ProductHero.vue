<template>
  <div class="product-hero-wrapper relative w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
      <div class="relative">
        <div class="h-full bg-cover" :style="{ 'background-image': `url(${products[0].src})` }"></div>
      </div>

      <div class="">
        <div class="h-2/3 overflow-hidden">
          <div :style="{ 'background-image': `url(${products[1].src})` }"></div>
          <img :src="products[1].src" class="w-full">
        </div>
        <div class="h-1/2 py-4 p-8 sm:pl-0 sm:pr-8">
          <div class="text-sm">XL Collection</div>
          <div class="grid grid-cols-2">
            <div class="text-4xl font-medium mb-4">{{board.title}}</div>
            <div class="text-2xl font-bold justify-self-end">${{board.price}}</div>
          </div>
          <div class="flex justify-end">
            <a class="rounded-full bg-black text-white flex justify-center py-2 w-1/3" :href="board.orderLink" target="_blank">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductHero',
  props: {
    board: {
      type: Object
    },
    products: {
      type: Array
    }
  },
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gradient-bottom-card-text {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0) 80%);
  }
</style>
