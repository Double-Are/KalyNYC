<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />
    <div class="text-2xl md:text-4xl lg:text-7xl font-medium py-10 px-20">Rides</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-20">
      <div class="mb-8" v-for="(ride, index) in youtubeRides" v-bind:key="index">
        <div class="text-sm mb-1 font-medium">#{{ride.tag}}</div>
        <iframe  
          class="mb-3 rounded-lg"
          width="100%" 
          height="315" 
          :src="ride.src" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        <div class="font-bold mb-2 truncate">{{ride.title}}</div>
        <div class="text-sm text-gray-500">{{limitToNumberOfCharacters(75, ride.description)}}</div>
      </div>
    </div>
    <ChooseYourRide />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ChooseYourRide from '@/components/ChooseYourRide'
import youtubeRides from '@/utils/rides.js'

export default {
  name: 'Video',
  props: {},
  components: {
    Navbar,
    ChooseYourRide
  },
  data() {
    return {
      youtubeRides
    }
  },
  methods: {
    limitToNumberOfCharacters(number, string) {
      if(string.length > number) {
        return string.substring(0,number) + '...'
      }

      return string
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
