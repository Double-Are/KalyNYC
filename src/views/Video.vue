<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />
    
    <div class="px-8 sm:px-20 py-10 sm:py-16">
      <h1 class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Rides</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <VideoCard v-for="(listing, index) in youtubeRides"  
          v-bind:key="index + 'ride'" 
          :listing="listing" />
      </div>
    </div>

    <div class="px-8 sm:px-20 bg-gray-100 py-10 sm:py-16">
      <h2 class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Interviews</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <VideoCard v-for="(listing, index) in youtubeInterviews"  
          v-bind:key="index + 'ride'" 
          :listing="listing" />
      </div>
    </div>
    
    <div class="bg-black px-8 sm:px-20 py-10 sm:py-16">
      <ChooseYourRide />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ChooseYourRide from '@/components/ChooseYourRide'
import youtubeRides from '@/utils/rides.js'
import youtubeInterviews from '@/utils/interviews.js'
import VideoCard from '@/components/VideoCard'

export default {
  name: 'Video',
  props: {},
  components: {
    Navbar,
    ChooseYourRide,
    VideoCard
  },
  data() {
    return {
      youtubeRides,
      youtubeInterviews
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
