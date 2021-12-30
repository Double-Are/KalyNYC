<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />
    <h1 class="opacity-0">Kaly Documentation</h1>

    <div class="px-10 sm:px-20 bg-gray-100 p-16">
      <h2 class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Documentation</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <VideoCardLongDescription v-for="(listing, index) in youtubeDocumentation"  
          v-bind:key="index + 'documentation'" 
          :listing="listing" />
      </div>
    </div>

    <div class="bg-black p-16">
      <ChooseYourRide />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ChooseYourRide from '@/components/ChooseYourRide'
import youtubeDocumentation from '@/utils/documentation.js'
import VideoCardLongDescription from '@/components/VideoCardLongDescription'

export default {
  name: 'Video',
  props: {},
  components: {
    Navbar,
    ChooseYourRide,
    VideoCardLongDescription
  },
  data() {
    return {
      youtubeDocumentation
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
