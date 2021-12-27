<template>
  <div id="app">
    <router-view :boards="boards" :parts="parts" />
    <Footer />
  </div>
</template>

<script>
import KalyXLR1 from '@/assets/KalyXLR1.jpg'
import KalyXLR2 from '@/assets/KalyXLR2.webp'
import KalyXL501 from '@/assets/KalyXL501.webp'
import XLRTall from '@/assets/XLR-Tall.jpg'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      boards: {
        xlr: {
          title: 'XL-R',
          slogan: 'A Class of One.',
          description: `XL-R is our most advanced esk8 yet.
          Designed to satisfy all the requirements of todays riders and pushing the boundaries of what is possible on esk8, gone are the days of compromising and settling for one riding style or another.
          Free yourself, Advance to the future.`,
          orderLink: '',
          specs: {
            battery: {
              title: 'Battery',
              primary: '18S-8P'
            },
            motors: {
              title: 'Motors',
              primary: '63100-110Kv'
            },
            range: {
              title: 'Range',
              primary: '60-90 Miles'
            },
            chargeTime: {
              title: 'Charge Time',
              primary: '3 Hours'
            },
            inclination: {
              title: 'Inclination',
              primary: '+40%'
            },
            dimensions: {
              title: 'Dimensions',
              primary: '48.50" x 18.50" x 8.50"'
            },
            additionalInfromation: {
              title: 'Additional Infromation',
              primary: ''
            },
            waiver: {
              title: 'WAIVER OF LIABILITY',
              primary: ''
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
          ],
          products: [
            {
              main: true,
              src: XLRTall
            },
            {
              main: true,
              src: KalyXLR1
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_2739ced4514f4613aaa952519bf5c27e~mv2.jpg/v1/crop/x_147,y_406,w_3679,h_1694/fill/w_2606,h_1200,al_c,q_90,usm_0.66_1.00_0.01/IMG_8088.webp'
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_2e82df953de54b169bd6bc63cd39ba2a~mv2.jpg/v1/crop/x_0,y_663,w_3512,h_1840/fill/w_1370,h_718,al_c,q_85,usm_0.66_1.00_0.01/IMG_8114.webp'
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_2739ced4514f4613aaa952519bf5c27e~mv2.jpg/v1/crop/x_130,y_845,w_1753,h_1015/fill/w_1240,h_718,al_c,q_85,usm_0.66_1.00_0.01/IMG_8088.webp'
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_739a7ed17e8d418da3aab7938fdd2b5a~mv2.jpg/v1/crop/x_0,y_638,w_3832,h_2053/fill/w_2606,h_1396,al_c,q_90,usm_0.66_1.00_0.01/IMG_8106.webp'
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_51eac07d05e94751aff813e959d75820~mv2.jpg/v1/crop/x_0,y_66,w_3039,h_1399/fill/w_2606,h_1200,al_c,q_90,usm_0.66_1.00_0.01/IMG_8102.webp'
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_de18d571698f4ca5b822274e328c8ba5~mv2.jpg/v1/crop/x_260,y_0,w_3513,h_2268/fill/w_1270,h_820,al_c,q_85,usm_0.66_1.00_0.01/14-36.webp'
            },
            {
              src: 'https://static.wixstatic.com/media/201c1e_c7f2822ebcc94c00825aef2304d4af85~mv2.jpg/v1/crop/x_106,y_106,w_3464,h_2129/fill/w_1338,h_820,al_c,q_85,usm_0.66_1.00_0.01/12-38.webp'
            }
          ]
        },
        xl50: {
          title: 'XL50',
          slogan: 'The Street Carving Dream',
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
          slogan: 'The Street Carving Dream',
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

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 2000px;
  margin: 0 auto;
}
</style>
