<template>
  <div class="relative max-h-80 ">
      <slot></slot>

      <button @click="prev" class="absolute p-2 top-1/2 bg-white text-black left-0">
        <span v-html="`<`"></span>
      </button>
      <button @click="next" class="absolute p-2 top-1/2 bg-white text-black right-0">
        <span v-html="`>`"></span>
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