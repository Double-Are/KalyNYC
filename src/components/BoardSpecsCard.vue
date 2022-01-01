<template>
  <div class="board-specs-card-wrapper w-full md:w-1/4 p-8">
    <h3 class="text-4xl font-medium mb-4">{{board.title}}</h3>
    <ul class="specs text-xl mb-14">
      <li class="grid grid-cols-2 mb-2">
        <div>Battery</div>
        <div class="font-bold text-right">{{board.specs.battery.primary}}</div>
      </li>
      <li class="grid grid-cols-2 mb-2">
        <div>Motors</div>
        <div class="font-bold text-right">{{board.specs.motors.primary}}</div>
      </li>
      <li class="grid grid-cols-2 mb-2">
        <div>Range</div>
        <div class="font-bold text-right">{{board.specs.range.primary}}</div>
      </li>
      <li class="grid grid-cols-2 mb-2">
        <div>Charge Time</div>
        <div class="font-bold text-right">{{board.specs.chargeTime.primary}}</div>
      </li>
    </ul>

    <div class="grid grid-cols-2">
      <div class="text-2xl font-bold">${{board.price}}</div>
      <router-link :to="board.internalProductPage" class="rounded-full bg-black text-white flex justify-center items-center cursor-pointer">More Info</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardSpecsCard',
  props: {
    board: {
      type: Object
    },
    onClick: {
      type: Function
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
