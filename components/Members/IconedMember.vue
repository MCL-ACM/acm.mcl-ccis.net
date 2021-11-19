<template>
  <div class="flex flex-col items-center text-center p-3">
    <img
      :src="image"
      class="h-28 w-28 mb-3 rounded-full overflow-hidden object-cover"
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
