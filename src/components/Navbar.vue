<template>
  <div class="nav-bar-wrapper grid grid-cols-1 lg:grid-cols-1 items-center w-full fixed py-8 z-30">
    <div class="gradient-nav-bar absolute w-full h-full z-0"></div>
    <!--<div class="z-10">
      <ul class="text-2xl text-gray-100 flex">
        <li class="mr-5">Products</li> 
        <li>Contact</li>
      </ul>
    </div>-->
    <div class="flex z-10 justify-self-center">
      <img class="kaly-logo" :src="Kaly" />
    </div>
    <!--<div class="flex place-content-end z-10">
      <img class="cart-logo" :src="Cart" />
    </div>-->
  </div>  
</template>

<script>
import Kaly from '@/assets/Kaly Logo.png'
import Cart from '@/assets/cart.png'

export default {
  name: 'NavBar',
  props: {},
  data() {
    return {
      Kaly,
      Cart
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
