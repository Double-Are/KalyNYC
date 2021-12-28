<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />

    <div class="text-2xl md:text-4xl lg:text-7xl font-medium py-10 px-20">Documentation</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 px-20">
      <div class="mb-8 grid grid-cols-2 gap-4" v-for="(documentation, index) in youtubeDocumentation" v-bind:key="index">
        <div>
          <div class="text-sm mb-1 mr-1 font-medium" v-for="(tag, index) in documentation.tags" v-bind:key="index + 'tag'">#{{tag}}</div>
          <iframe  
            class="mb-3 rounded-lg"
            width="100%" 
            height="315" 
            :src="documentation.src" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="mt-5">
          <div class="font-bold mb-2 truncate">{{documentation.title}}</div>
          <div class="text-sm font-medium">{{documentation.creator}}</div>
          <div class="text-sm text-gray-500">{{documentation.description}}</div>
        </div>
      </div>
    </div>

    <ChooseYourRide />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ChooseYourRide from '@/components/ChooseYourRide'
import youtubeDocumentation from '@/utils/documentation.js'

export default {
  name: 'Video',
  props: {},
  components: {
    Navbar,
    ChooseYourRide
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
