<template>
  <div class="fixed 
            overflow-x-hidden 
            overflow-y-auto
            inset-1 
            flex 
            justify-center 
            items-center 
            z-50">
    <div class="mx-auto w-auto max-w-6xl px-6 pb-8 pt-60 md:p-8">
        <div class="relative
                  bg-midnight-blue 
                    w-full 
                    rounded-3xl 
                    shadow-2xl 
                    text-white 
                    p-12">

            <div class="max-x-2xl flex flex-col justify-center content-center">
              <button @click="closeModal" class="absolute font-bold top-6 right-6">
                <img src="@/assets/svg/close.svg" alt="" class="h-4">
              </button>
              
              <h2 class="text-4xl font-bold mb-2">{{ details.title }}</h2>
              <p class="font-extralight mb-4">{{ details.date }}</p>
              <p class="mb-6">{{ details.description }}</p>

              <!-- Slideshow -->
              <div class="m-auto w-full md:w-1/2">
                <EventsSlideshow
                  @prev="prevImage"
                  @next="nextImage"
                >
                  <EventsSlideshowImage v-for="(image, index) in details.images" 
                    :key="index" 
                    :index="index"
                    :visibleImage="visibleImage" >
                    <a :href="image" target="_blank">
                      <img :src="image" alt="" class="object-cover h-40 md:h-60 lg:h-80 w-full">
                    </a>
                    
                  </EventsSlideshowImage>
                </EventsSlideshow>
              </div>

            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleImage: 0,
    }
  },
  props: {
    details: {
      type: Object,
      default: () => ({
          title: 'Event Title',
          date: 'Date',
          cover: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          images: [
            ''
          ]
        })
    }
  },
  computed: {
    imagesLen() {
      return Object.keys(this.details.images).length;
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    prevImage() {
      console.log(typeof(this.details.images));
      if(this.visibleImage === 0) {
        this.visibleImage = this.imagesLen - 1;
      }
      else {
        this.visibleImage--;
      }
    },
    nextImage() {
      if(this.visibleImage >= this.imagesLen - 1) {
        this.visibleImage = 0;
      }
      else {
        this.visibleImage++;
      }
    }
  }
}
</script>

<style>
</style>