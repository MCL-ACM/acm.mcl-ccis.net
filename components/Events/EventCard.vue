<template>
  <NuxtLink @click.native="toggleModal = !toggleModal" to="">
    <!-- Event Card -->
    <div class="flex 
                flex-col 
                justify-end 
                h-full w-full 
                px-7 pb-7 pt-80 
                rounded-3xl 
                hover:shadow-2xl 
                bg-cover
                bg-center
                block"
        :style="{
          'background-image': `linear-gradient(rgba(44, 193, 199, 0) 0%, rgba(44, 193, 199, 0.45) 30%, rgba(217, 237, 146, 1) 100%), url('${details.cover}')`,
        }"
                >
      <div>
        <p class="font-extralight text-lg">{{ details.date }}</p>
        <h2 class="font-bold text-2xl">{{ details.title }}</h2>
      </div>
    </div>
    
    <!-- Event Modal -->
    <EventsEventModal v-if="toggleModal" :details="details" />
    
    <!-- Modal Background -->
    <div v-if="toggleModal" class="fixed inset-0 z-40 opacity-90 bg-gray-50"></div>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      toggleModal: false
    };
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
  }
}
</script>

<style>
</style>