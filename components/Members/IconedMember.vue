<template>
  <div class="flex flex-col items-center text-center p-3">
    <img
      :src="image"
      class="max-h-20 max-w-20 mb-3 rounded-full overflow-hidden"
      alt=""
    />
    <p class="text-lg font-medium">{{ fullName }}</p>
    <p v-if="title != null" class="text-md">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
      default: "Very Long, Long Name M.I. ",
    },
    title: {
      type: String,
      default: null,
      required:false
    },
    image: {
      type: String,
      default: "/images/president.png",
    },
  },
};
</script>

<style lang="scss" scoped></style>
