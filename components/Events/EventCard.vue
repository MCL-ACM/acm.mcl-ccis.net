<template>
  <div @click="openModal(details)">
    <!-- Event Card -->
    <div class="justify-end 
                h-full w-full 
                px-7 pb-7 pt-80 
                rounded-3xl 
                cursor-pointer
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
  </div>
</template>

<script>
export default {
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
  methods: {
    openModal(details) {
      this.$emit('open-modal', details)
    }
  }
}
</script>

<style>
</style>