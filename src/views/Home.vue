<template>
  <div class="kalynyc-wrapper">
    <Navbar />
    <Hero />
    <div class="kaly-impact my-20 px-20"><img :src="KalyNYC" /></div>
    <div class="pl-20 mb-16">
      <NextRide />
    </div>
    <div class="mb-16">
      <BoardView :board="boards.xlr" left/>
    </div>
    <div class="mb-16">
      <BoardView :board="boards.xl50" right/>
    </div>
    <div class="grid grid-cols-2 gap-10 p-20">
      <div class="w-full">
        <SquareCard class="mb-10" :img="SomethingBeautifulCard" title="Something Beautiful Tee" href=""/>
        <SquareCard class="mb-10" :img="BDampersCard" title="B_Dampers" href=""/>
      </div>
      <div class="mt-20">
        <SquareCard class="mb-10" :img="XL20Card" title="XL 2.0" href=""/>
        <SquareCard class="mb-10" :img="XLDeckCard" title="XL Deck" href=""/>
      </div>
    </div>

    <div class="mb-16 relative">
      <div class="absolute right-0 text-white text-4xl py-8 px-14 font-bold">Find Your Adventure</div>
      <img class="w-full" :src="FindYourAdventure" />
    </div>

    <div class="px-20 parts-accessories">
      <div class="text-7xl font-medium mb-10">Parts / Accessories</div>

      <div class="grid grid-cols-3 gap-8">
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
import KalyXLR1 from '@/assets/KalyXLR1.jpg'
import KalyXLR2 from '@/assets/KalyXLR2.webp'
import KalyXL501 from '@/assets/KalyXL501.webp'
import SomethingBeautifulCard from '@/assets/Something Beautiful Card.jpg'
import XLDeckCard from '@/assets/XL Deck Card.jpg'
import BDampersCard from '@/assets/B_Dampers Card.jpg'
import XL20Card from '@/assets/XL20 Card.jpg'
import FindYourAdventure from '@/assets/Find Your Adventure Splash.jpg'

export default {
  name: 'Kaly',
  props: {},
  components: {
    Hero,
    Navbar,
    NextRide,
    BoardView,
    SquareCard,
    PartCard
  },
  data() {
    return {
      KalyNYC,
      SomethingBeautifulCard,
      XLDeckCard,
      BDampersCard,
      FindYourAdventure,
      XL20Card,
      boards: {
        xlr: {
          title: 'XL-R',
          orderLink: '',
          specs: {
            battery: {
              primary: '18S-8P'
            },
            motors: {
              primary: '63100-110Kv'
            },
            range: {
              primary: '60-90 Miles'
            },
            chargeTime: {
              primary: '3 Hours'
            }
          },
          price: '6,350',
          images: [
            {
              src: KalyXLR2,
              alt: ''
            },
            {
              src: KalyXLR1,
              alt: ''
            }
          ]
        },
        xl50: {
          title: 'XL50',
          orderLink: '',
          specs: {
            battery: {
              primary: '12S-8P'
            },
            motors: {
              primary: '6385-190kv'
            },
            range: {
              primary: '50 Miles'
            },
            chargeTime: {
              primary: '3 Hours'
            }
          },
          price: '4,185',
          images: [
            {
              src: KalyXL501,
              alt: ''
            }
          ]
        },
        xl20: {
          title: 'XL2.0',
          orderLink: '',
          specs: {
            battery: {
              primary: ''
            },
            motors: {
              primary: ''
            },
            range: {
              primary: ''
            },
            chargeTime: {
              primary: ''
            }
          },
          price: '',
          images: [
            {
              src: '',
              alt: ''
            }
          ]
        }
      },
      parts: [
        {
          title: 'Hoyt St Nylon Puck',
          description: 'Hoyt St Nylon Puck Remote Control.',
          href: 'https://www.hoytskate.com/products/hoyt-st-nylon-puck-remote-control?variant=39286111076394',
          img: 'https://cdn.shopify.com/s/files/1/0077/0673/8747/products/IMG_8612_3024x.jpg?v=1617840626'
        },
        {
          title: 'Phatty Tire 200x75',
          description: 'New 200 x 75 mm Phatty tires. Insane grip & smooth ride over rough pavement while also providing superb stability at high speed.',
          href: '',
          img: 'https://static.wixstatic.com/media/201c1e_1ebd0fcad03d4960b1e1939acc93e64a~mv2.jpg/v1/fill/w_1511,h_850,al_c,q_85/201c1e_1ebd0fcad03d4960b1e1939acc93e64a~mv2.webp'
        },
        {
          title: 'V-Ring',
          description: 'V-Ring for Gear Drive. Compatible with all Gear drives.',
          href: '',
          img: 'https://static.wixstatic.com/media/201c1e_4c3e6fdfe2724d448c93375bfce76d3b~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01/201c1e_4c3e6fdfe2724d448c93375bfce76d3b~mv2.webp'
        },
        {
          title: 'Angular Contact Bearings',
          description: 'Angular contact ball bearings have inner and outer ring raceways that are displaced relative to each other in the direction of the bearing axis.',
          href: '',
          img: 'https://static.wixstatic.com/media/201c1e_0f04257d0aa74375931e4ff0c4c04f1f~mv2_d_2194_1234_s_2.jpg/v1/fill/w_1960,h_1102,al_c,q_85,usm_0.66_1.00_0.01/201c1e_0f04257d0aa74375931e4ff0c4c04f1f~mv2_d_2194_1234_s_2.webp'
        },
        {
          title: '40T Helical Gear',
          description: 'Replacement for quick disconnect 40T Helical gear for wheel.',
          href: '',
          img: 'https://static.wixstatic.com/media/201c1e_128d7894dde040fbb7a721e54bd39c85~mv2_d_1306_1306_s_2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01/201c1e_128d7894dde040fbb7a721e54bd39c85~mv2_d_1306_1306_s_2.webp'
        },
        {
          title: 'V1 40T/10T Straight Cut Gear',
          description: 'Replacement for quick disconnect 40 teeth straight cut gear for a wheel.Compatible only with V1 Straight cut gear drive.',
          href: '',
          img: 'https://static.wixstatic.com/media/201c1e_94035f66694a45f5a2b167ff4ff10646~mv2_d_1512_1512_s_2.jpg/v1/fill/w_1512,h_850,al_c,q_85/201c1e_94035f66694a45f5a2b167ff4ff10646~mv2_d_1512_1512_s_2.webp'
        },
        {
          title: 'Balance for XL-R',
          description: 'Angular contact ball bearings have inner and outer ring raceways that are displaced relative to each other in the direction of the bearing axis.',
          href: '',
          img: 'https://static.wixstatic.com/media/201c1e_3372c3614d9a4913b9c3d75db1a0229b~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01/201c1e_3372c3614d9a4913b9c3d75db1a0229b~mv2.webp'
        }
      ]
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
