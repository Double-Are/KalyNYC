<template>
  <div class="kalynyc-wrapper w-full">
    <!--NavBar-->
    <Navbar />

    <!--HERO-->
    <Hero />
    
    <!--Large KalyNYC-->
    <div class="kaly-impact my-10 sm:my-20 mx-auto content-max-width">
      <h1 class="font-bold text-black text-center">Kaly.NYC</h1>
    </div>
    
    <!--All XL Boards-->
    <div class="pl-20 mb-16">
      <NextRide />
    </div>

    <!--XL Boards-->
    <div class="content-max-width mx-auto">
      <div class="mb-16">
        <BoardView :board="boards.xlr" left />
        <!--<BoardView :board="boards.xlr" left :onClick="() => openKalySite(boards.xlr.orderLink, true, kalySite)"/>-->
      </div>
      <div class="mb-16">
        <BoardView :board="boards.xl50" right />
        <!--<BoardView :board="boards.xl50" right :onClick="() => openKalySite(boards.xl50.orderLink, true, kalySite)"/>-->
      </div>
    </div>

    <!--Big Square Parts-->
    <div class="content-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-20">
      <div class="w-full">
        <div @click="openKalySite('https://www.kaly.nyc/product-page/something-beautiful-tee', true, kalySite)">
          <SquareCard class="mb-10" :img="SomethingBeautifulCard" title="Something Beautiful Tee" />
        </div>
        <div @click="openKalySite('https://www.kaly.nyc/product-page/b-dampers', true, kalySite) ">
          <SquareCard class="mb:mb-10" :img="BDampersCard" title="B_Dampers" />
        </div>
      </div>
      <div class="md:mt-20">
        <div @click="openKalySite('https://www.kaly.nyc/product-page/xl2-0', true, kalySite)">
          <SquareCard class="mb-10" :img="XL20Card" title="XL 2.0" />
        </div>
        <div @click="openKalySite('https://www.kaly.nyc/product-page/xl-deck', true, kalySite)">
          <SquareCard class="mb-10" :img="XLDeckCard" title="XL Deck" />
        </div>
      </div>
    </div>

    <div class="kaly-impact my-5 mb-20 mx-auto content-max-width px-4">
      <div class="impact font-bold bg-cover" :style="{ 'background-image': `url(${KalyTitleGIF}` }">LIMITLESS RIDE</div>
    </div>

    <!--Interviews-->
    <div class="px-10 sm:px-20 bg-gray-100 p-5 md:p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 md:mb-10">Interviews</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
        <VideoCard v-for="(listing, index) in youtubeInterviews"  
          v-bind:key="index + 'ride'" 
          :listing="listing" />
      </div>
    </div>

    <!--Videos-->
    <div class="px-10 sm:px-20 videos-card-long-description p-5 md:p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 md:mb-10">The Ultimate ESk8 Experience</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <VideoCardLongDescription v-for="(listing, index) in selectHomeVideos"  
          v-bind:key="index + 'documentation'" 
          :listing="listing" />
      </div>
    </div>

    <!--Splash Image-->
    <div class="relative">
      <div class="absolute right-0 text-white text-4xl py-8 px-14 font-bold">Find Your Adventure</div>
      <img class="w-full" :src="FindYourAdventure" alt="XLR On Cliff" />
    </div>

    <!--Parts Accessories-->
    <div class="px-10 sm:px-20 parts-accessories bg-gray-100 p-5 md:p-16">
      <div class="text-2xl md:text-4xl lg:text-7xl font-medium mb-4 md:mb-10">Parts / Accessories</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <PartCard v-for="(part, index) in parts" v-bind:key="index" 
          :title="part.title" 
          :description="part.description" 
          :img="part.img" 
          :href="part.href" />
      </div>
    </div>

    <div v-if="kalySite.state" class="fixed bottom-0 right-0 h-3/4 z-30 w-full bg-black animate__animated animate__fadeInUp">
      <div class="absolute z-10 h-24 w-full top-0 left-0 bg-black px-8 py-4 grid grid-cols-2 items-center shadow-lg-gray">
        <div class="text-2xl md:text-4xl lg:text-5xl font-medium text-white mr-4">Kaly.nyc Portal</div>
        <div class="flex justify-self-end text-white text-2xl">
          <div class="mr-4" @click="openKalySite('', false, kalySite)">Close</div>
          <div @click="openKalySite('https://www.kaly.nyc/cart', true, kalySite)">Cart</div>
        </div>
      </div>
      <iframe :src="kalySite.href" class="w-full h-full"/>
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
import openKalySite from '@/utils/openKalySite.js'
import XL40GIF from '@/assets/XL40-GIF.gif'
import KalyTitleGIF from '@/assets/KalyTitle-GIF.gif'

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
      XL40GIF,
      KalyTitleGIF,
      SomethingBeautifulCard,
      XLDeckCard,
      BDampersCard,
      FindYourAdventure,
      XL20Card,
      youtubeRides,
      youtubeInterviews,
      kalySite: {
        state: false,
        href: '',
      }
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
  },
  methods: {
    openKalySite
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .kaly-impact {
    font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; 
  }
  .kaly-impact {
    /*font-size: min(max(16px, calc(1rem + ((1vw - 3px) * 25.5294))), 450px);*/
    font-size: min(max(50px, calc(3.125rem + ((1vw - 2.8px) * 27))), 320px);
    line-height: min(max(50px, calc(3.125rem + ((1vw - 2.8px) * 27))), 320px);
  }
  .impact {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  .shadow-lg-gray {
    box-shadow: 0px 3px 25px #444;
  }
</style>
