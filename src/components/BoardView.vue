<template>
  <div class="board-view-wrapper grid sm:flex">
    <div v-if="left" class="grid sm:flex w-full"> 
      <div class="sm:w-3/4">
        <div :style="{ 'background-image': `url(${board.images[0].src})` }" class="h-96 w-full bg-cover bg-center"></div>
      </div>
      <BoardSpecsCard :board="board" />
    </div>

    <div v-if="right" class="grid sm:flex w-full"> 
      <BoardSpecsCard class="order-2 sm:order-1" :board="board" />
      <div class="order-1 sm:order-2 flex w-full sm:w-3/4">
        <div :style="{ 'background-image': `url(${board.images[0].src})` }" class="h-96 w-full bg-cover bg-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardSpecsCard from '@/components/BoardSpecsCard'

export default {
  name: 'BoardView',
  components: {
    BoardSpecsCard
  },
  props: {
    board: {
      type: Object
    },
    left: {
      type: Boolean
    },
    right: {
      type: Boolean
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
