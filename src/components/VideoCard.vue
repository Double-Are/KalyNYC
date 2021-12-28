<template>
    <div class="mb-8">
      <div class="text-sm mb-1 mr-2 font-medium inline-block" v-for="(tag, index) in listing.tags" v-bind:key="index + 'tag'">#{{tag}}</div>
      <iframe  
        class="mb-3 rounded-lg"
        width="100%" 
        height="315" 
        :src="listing.src" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <div class="font-bold mb-2 truncate">{{listing.title}}</div>
      <div class="text-sm font-medium">{{listing.creator}}</div>
      <div class="text-sm text-gray-500">{{limitToNumberOfCharacters(75, listing.description)}}</div>
    </div>
</template>

<script>
import limitToNumberOfCharacters from '@/utils/limitToNumberOfCharacters.js'

export default {
  name: 'VideoCards',
  props: {
    listing: {
      type: Object
    },
  },
  methods: {
    limitToNumberOfCharacters
  }
}
</script>