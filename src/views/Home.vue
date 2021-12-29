<template>
  <div class="kalynyc-wrapper w-full">
    <!--NavBar-->
    <Navbar />

    <!--HERO-->
    <Hero />
    
    <!--Large KalyNYC-->
    <div class="kaly-impact my-20 mx-auto px-20 content-max-width">
      <img :src="KalyNYC" />
    </div>
    
    <!--All XL Boards-->
    <div class="pl-20 mb-16">
      <NextRide />
    </div>

    <!--XL Boards-->
    <div class="content-max-width mx-auto">
      <div class="mb-16">
        <BoardView :board="boards.xlr" left/>
      </div>
      <div class="mb-16">
        <BoardView :board="boards.xl50" right/>
      </div>
    </div>

    <!--Big Square Parts-->
    <div class="content-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20">
      <div class="w-full">
        <SquareCard class="mb-10" :img="SomethingBeautifulCard" title="Something Beautiful Tee" href="https://www.kaly.nyc/product-page/something-beautiful-tee"/>
        <SquareCard class="mb:mb-10" :img="BDampersCard" title="B_Dampers" href="https://www.kaly.nyc/product-page/b-dampers"/>
      </div>
      <div class="md:mt-20">
        <SquareCard class="mb-10" :img="XL20Card" title="XL 2.0" href="https://www.kaly.nyc/product-page/xl2-0"/>
        <SquareCard class="mb-10" :img="XLDeckCard" title="XL Deck" href="https://www.kaly.nyc/product-page/xl-deck"/>
      </div>
    </div>

    <!--Interviews-->
    <div class="px-10 sm:px-20 bg-gray-100 p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Interviews</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
        <VideoCard v-for="(listing, index) in youtubeInterviews"  
          v-bind:key="index + 'ride'" 
          :listing="listing" />
      </div>
    </div>

    <!--Videos-->
    <div class="px-10 sm:px-20 videos-card-long-description p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">The Ultimate ESk8 Experience</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <VideoCardLongDescription v-for="(listing, index) in selectHomeVideos"  
          v-bind:key="index + 'documentation'" 
          :listing="listing" />
      </div>
    </div>

    <!--Splash Image-->
    <div class="relative">
      <div class="absolute right-0 text-white text-4xl py-8 px-14 font-bold">Find Your Adventure</div>
      <img class="w-full" :src="FindYourAdventure" />
    </div>

    <!--Parts Accessories-->
    <div class="px-10 sm:px-20 parts-accessories bg-gray-100 p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-10">Parts / Accessories</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <PartCard v-for="(part, index) in parts" v-bind:key="index" 
          :title="part.title" 
          :description="part.description" 
          :img="part.img" 
          :href="part.href" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SquareCard from '@/components/SquareCard'
import PartCard from '@/components/PartCard'
import KalyNYC from '@/assets/Kaly.NYC.png'
import NextRide from '@/components/NextRide'
import BoardView from '@/components/BoardView'
import SomethingBeautifulCard from '@/assets/Something Beautiful Card.jpg'
import XLDeckCard from '@/assets/XL Deck Card.jpg'
import BDampersCard from '@/assets/B_Dampers Card.jpg'
import XL20Card from '@/assets/XL20 Card.jpg'
import FindYourAdventure from '@/assets/Find Your Adventure Splash.jpg'
import youtubeRides from '@/utils/rides.js'
import VideoCardLongDescription from '@/components/VideoCardLongDescription'
import VideoCard from '@/components/VideoCard'
import youtubeInterviews from '@/utils/interviews.js'

export default {
  name: 'Kaly',
  props: {
    boards: {
      type: Object
    },
    parts: {
      type: Array
    }
  },
  components: {
    Hero,
    Navbar,
    NextRide,
    BoardView,
    SquareCard,
    PartCard,
    VideoCardLongDescription,
    VideoCard
  },
  data() {
    return {
      KalyNYC,
      SomethingBeautifulCard,
      XLDeckCard,
      BDampersCard,
      FindYourAdventure,
      XL20Card,
      youtubeRides,
      youtubeInterviews
    }
  },
  computed: {
    selectHomeVideos() {
      return youtubeRides.filter(ride => {
        if (ride.home) {
          return ride
        }
      })
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
    font-size: min(max(16px, calc(1rem + ((1vw - 3px) * 25.5294))), 450px);
    min-height: 0vw;
  }
</style>
