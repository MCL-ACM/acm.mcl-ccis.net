<template>
  <button class="text-lg font-medium bg-blue text-white rounded-full px-5 py-3">
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
