<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />
    
    <div class="p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Rides</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <VideoCard v-for="(listing, index) in youtubeRides"  
          v-bind:key="index + 'ride'" 
          :listing="listing" />
      </div>
    </div>

    <div class="px-10 sm:px-20 bg-gray-100 p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Interviews</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <VideoCard v-for="(listing, index) in youtubeInterviews"  
          v-bind:key="index + 'ride'" 
          :listing="listing" />
      </div>
    </div>

    <div class="content-max-width mx-auto">
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
  .kaly-impact {
    font-family: impact;
  }
  .kaly-impact {
    margin-top: 145px;
    line-height: min(max(16px, calc(1rem + ((1vw - 3px) * 25.5294))), 450px);
    font-size: min(max(16px, calc(1rem + ((1vw - 3px) * 25.5294))), 450px);
    min-height: 0vw;
  }
</style>
