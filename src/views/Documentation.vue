<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />

    <div class="text-2xl md:text-4xl lg:text-7xl font-medium py-10 px-20">Documentation</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 px-20">
      <VideoCardLongDescription v-for="(listing, index) in youtubeDocumentation"  
        v-bind:key="index + 'documentation'" 
        :listing="listing" />
    </div>

    <ChooseYourRide />
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
