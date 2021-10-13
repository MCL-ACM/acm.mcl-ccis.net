<template>
  <div
    class="h-52 p-14 overflow-clip bg-center bg-no-repeat bg-gray-600"
    :style="{
      'background-image': `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(31, 97, 153, 1)), url('${details.image}')`,
      'border-radius' : '0px 0px 80px 0px'
    }"
  >
    <div class="w-full h-full relative">
      <p class="absolute bottom-0 right-0 text-white text-3xl font-bold">{{ details.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"]
};
</script>

<style lang="scss" scoped></style>
