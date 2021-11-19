<template>
  <button
    class="
      text-lg
      font-medium
      bg-blue
      text-white
      rounded-full
      px-5
      py-3
      transition
      duration-75
      transform
      hover:scale-105 hover:shadow-lg
    "
    @click="$emit('clicked')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
