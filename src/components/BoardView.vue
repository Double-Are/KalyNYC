<template>
  <div class="board-view-wrapper grid sm:flex">
    <div v-if="left" class="grid sm:grid-cols-1 md:flex w-full"> 
      <div class="md:w-3/4">
        <div :style="{ 'background-image': `url(${board.images[0].src})` }" class="h-96 w-full bg-cover"></div>
      </div>
      <BoardSpecsCard :board="board" :onClick="onClick" />
    </div>

    <div v-if="right" class="grid sm:grid-cols-1 md:flex w-full"> 
      <BoardSpecsCard class="order-2 md:order-1" :board="board" :onClick="onClick" />
      <div class="order-1 md:order-2 flex w-full md:w-3/4">
        <div :style="{ 'background-image': `url(${board.images[0].src})` }" class="h-96 w-full bg-cover"></div>
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
