<template>
  <div class="relative h-40 md:h-60 lg:h-80 ">
      <slot></slot>

      <button @click="prev" class="absolute p-2 top-1/2 bg-white left-1 rounded-full -mt-4">
        <img src="@/assets/svg/back.svg" alt="" class="h-5">
      </button>
      <button @click="next" class="absolute p-2 top-1/2 bg-white right-1 rounded-full -mt-4">
        <img src="@/assets/svg/next.svg" alt="" class="h-5 text-right">
      </button>
  </div>
</template>

<script>
export default {
    methods: {
        prev() {
            this.$emit('prev')
        },
        next() {
            this.$emit('next')
        }
    }
}
</script>

<style>

</style>