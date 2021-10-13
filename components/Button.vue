<template>
  <button class="px-5 py-3 text-lg font-medium bg-blue-500 text-white rounded-full">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      default: "",
      type: String
    },
    color: {
      default: "#122F45",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
