<template>
  <div class="nav-bar-wrapper grid grid-cols-1 lg:grid-cols-1 items-center w-full py-8 z-30 top-0" 
    :class="{ 'relative': noFixed, 'fixed': !noFixed }" >
    <div v-if="!bgSolid" class="gradient-nav-bar absolute w-full h-full z-0"></div>
    <div v-if="bgSolid" class="bg-black absolute w-full h-full z-0"></div>
    <div class="sm:grid flex sm:grid-cols-3 items-center px-8 sm:px-0">
      <div class="z-10 order-2 sm:order-1">
        <ul class="text-lg sm:text-2xl text-gray-100 flex px-8">
          <li class="mr-5">
            <router-link to="/video">Media</router-link>
          </li> 
          <li class="mr-5">
            <router-link to="/documentation"><span>Doc</span><span class="inline sm:hidden">s</span><span class="hidden sm:inline">umentation</span></router-link>
          </li> 
        </ul>
      </div>
      <div class="flex z-10 sm:justify-self-center order-1 sm:order-2">
        <router-link to="/">
          <img class="kaly-logo hidden sm:block" :src="Kaly" alt="Kaly Logo Full" />
          <img class="kaly-logo block sm:hidden" :src="KalyOuro" alt="Kaly Logo Icon" />
        </router-link>
      </div>
      <!--<div class="flex place-content-end z-10">
        <img class="cart-logo" :src="Cart" alt="Cart Icon" />
      </div>-->
    </div>
  </div>  
</template>

<script>
import Kaly from '@/assets/Kaly Logo.png'
import KalyOuro from '@/assets/KalyOuro.webp'
import Cart from '@/assets/cart.png'

export default {
  name: 'NavBar',
  props: {
    bgSolid: {
      type: Boolean
    },
    noFixed: {
      type: Boolean
    }
  },
  data() {
    return {
      Kaly,
      Cart,
      KalyOuro
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-bar-wrapper {
    max-width: 2000px;
  }

  .kaly-logo {
    max-width: 250px;
    max-height: 64px;
    min-width: 63px;
    width: 100%;
    height: fit-content;
  }

  .cart-logo {
    width: 45px;
  }

  .gradient-nav-bar {
    background: rgb(9,9,121);
    background: linear-gradient(0deg, rgba(9,9,121,0) 24%, rgba(0,0,0,1) 100%);
  }
</style>
