<template>
  <div class="product-wrapper">
    <Navbar />
    <ProductHero :board="boards[this.$route.params.product]" 
      :products="boards[this.$route.params.product].products" 
      :onClick="() => openKalySite(boards[this.$route.params.product].orderLink, true, kalySite)"/>

    <div class="flex text-7xl justify-center w-full p-8 py-12 font-bold">
      {{boards[this.$route.params.product].slogan}}
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10 sm:px-20 content-max-width mx-auto">
      <div class="text-lg">
        <div class="font-bold mb-4">The Mission</div>
        <div class="text-2xl">{{boards[this.$route.params.product].description}}</div>
      </div>
      <div>
        <div class="font-bold">Product Info</div>
        <hr class="my-2" />
        <div>
          <ul>
            <li class="grid grid-cols-2 mb-2 text-lg">
              <div>Battery:</div> <div class="justify-self-end font-bold">{{boards[this.$route.params.product].specs.battery.primary}}</div>
            </li>
            <li class="grid grid-cols-2 mb-2 text-lg">
              <div>Motors:</div> <div class="justify-self-end font-bold">{{boards[this.$route.params.product].specs.motors.primary}}</div>
            </li>
            <li class="grid grid-cols-2 mb-2 text-lg">
              <div>Range:</div> <div class="justify-self-end font-bold">{{boards[this.$route.params.product].specs.range.primary}}</div>
            </li>
            <li class="grid grid-cols-2 mb-2 text-lg">
              <div>Charge Time:</div> <div class="justify-self-end font-bold">{{boards[this.$route.params.product].specs.chargeTime.primary}}</div>
            </li>
            <li class="grid grid-cols-2 mb-2 text-lg">
              <div>Inclination:</div> <div class="justify-self-end font-bold">{{boards[this.$route.params.product].specs.inclination.primary}}</div>
            </li>
            <li class="grid grid-cols-2 mb-2 text-lg">
              <div>Dimensions:</div> <div class="justify-self-end font-bold">{{boards[this.$route.params.product].specs.dimensions.primary}}</div>
            </li>
            <li class="grid grid-cols-1 mb-2 text-sm text-gray-500">
              <div>Additional Infromation / Waiver on Kaly.NYC</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20 content-max-width mx-auto">
      <div class="w-full">
        <SquareCard v-if="boards[this.$route.params.product].products[2]" class="mb-10" :img="boards[this.$route.params.product].products[2].src" href="" noView/>
        <SquareCard v-if="boards[this.$route.params.product].products[3]" class="mb-10" :img="boards[this.$route.params.product].products[3].src" href="" noView />
        <SquareCard v-if="boards[this.$route.params.product].products[4]" class="mb-10" :img="boards[this.$route.params.product].products[4].src" href="" noView />
        <SquareCard v-if="boards[this.$route.params.product].products[5]" class="mb:mb-10" :img="boards[this.$route.params.product].products[5].src" href="" noView/>
      </div>
      <div class="md:mt-20">
        <SquareCard v-if="boards[this.$route.params.product].products[6]" class="mb-10" :img="boards[this.$route.params.product].products[6].src" href="" noView/>
        <SquareCard v-if="boards[this.$route.params.product].products[7]" class="mb-10" :img="boards[this.$route.params.product].products[7].src" href="" noView/>
        <SquareCard v-if="boards[this.$route.params.product].products[8]" class="mb-10" :img="boards[this.$route.params.product].products[8].src" href="" noView/>
      </div>
    </div>

    <div class="p-8 bg-black">
      <div class="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Choose Your Ride</div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 text-white">
        <router-link to="/product/xlr">
          <div class="xl-collection-product-square">
            <img :src="XLRSquare" />
            <div class="px-10 py-4 text-2xl md:text-4xl">XL-R</div>
          </div>
        </router-link>
        <router-link to="/product/xl50">
          <div class="xl-collection-product-square">
            <div><img :src="XL50Square" /></div>
            <div class="px-10 py-4 text-2xl md:text-4xl">XL 50</div>
          </div>
        </router-link>
        <router-link to="/product/xl20">
          <div class="xl-collection-product-square">
            <img :src="XL20Square" />
            <div class="px-10 py-4 text-2xl md:text-4xl">XL 2.0</div>
          </div>
        </router-link>
      </div>
    </div>

    <div v-if="kalySite.state" class="fixed bottom-0 right-0 h-3/4 z-30 w-full bg-black animate__animated animate__fadeInUp">
      <div class="absolute z-10 h-24 w-full top-0 left-0 bg-black px-8 py-4 grid grid-cols-2 items-center shadow-lg-gray">
        <div class="text-2xl md:text-4xl lg:text-5xl font-medium text-white mr-4">Kaly.nyc Portal</div>
        <div class="flex justify-self-end text-white text-2xl">
          <div class="mr-4" @click="openKalySite('', false, kalySite)">Close</div>
          <div @click="openKalySite('https://www.kaly.nyc/cart', true, kalySite)">Cart</div>
        </div>
      </div>
      <iframe :src="kalySite.href" class="w-full h-full"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ProductHero from '@/components/ProductHero'
import SquareCard from '@/components/SquareCard'
import openKalySite from '@/utils/openKalySite.js'

import XLRSquare from '@/assets/XLR-square.jpg'
import XL50Square from '@/assets/XL50-square.jpg'
import XL20Square from '@/assets/XL2.0-square.jpg'

export default {
  name: 'Product',
  props: {
    boards: {
      type: Object
    },
    parts: {
      type: Array
    }
  },
  components: {
    Navbar,
    ProductHero,
    SquareCard
  },
  watch:{
    $route (){
      window.scrollTo(0,0)
    }
  }, 
  data() {
    return {
      XLRSquare,
      XL50Square,
      XL20Square,
      kalySite: {
        state: false,
        href: '',
      }
    }
  },
  mounted() {
    window.scrollTo(0,0)
  },
  methods: {
    openKalySite
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .kaly-impact {
    font-family: impact;
  }
  .kaly-impact {
    font-size: min(max(16px, calc(1rem + ((1vw - 3px) * 25.5294))), 450px);
    min-height: 0vw;
  }
</style>
