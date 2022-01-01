<template>
  <div class="kalynyc-wrapper w-full">
    <Navbar bgSolid noFixed />

    <div class="px-8 sm:px-20 py-10 sm:py-16">
      <h1 class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Documentation</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <VideoCardLongDescription v-for="(listing, index) in youtubeDocumentation"  
          v-bind:key="index + 'documentation'" 
          :listing="listing" />
      </div>
    </div>

    <div class="px-8 sm:px-20 bg-gray-100 py-10 sm:py-16">
      <h1 class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Blog Posts</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <a v-for="(listing, index) in mediumDocumentation"
          :href="listing.src"  
          target="_blank"
          v-bind:key="index + 'medium documentation'">
          <div class="mb-8">
            <div class="text-sm mb-1 mr-2 font-medium inline-block" v-for="(tag, index) in listing.tags" v-bind:key="index + 'tag'">#{{tag}}</div>
            <img  
              class="mb-3 rounded-lg"
              :src="listing.img" 
              :alt="`${listing.title} Picture`"
              />
            <div class="mt-1 sm:mt-5">
              <div class="font-bold mb-2 truncate">{{listing.title}}</div>
              <div class="text-sm font-medium">{{listing.creator}}</div>
              <div class="text-sm text-gray-500">{{listing.description}}</div>
            </div>
          </div>
        </a>
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
import { youtubeDocumentation, mediumDocumentation } from '@/utils/documentation.js'
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
      youtubeDocumentation,
      mediumDocumentation
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
</style>
