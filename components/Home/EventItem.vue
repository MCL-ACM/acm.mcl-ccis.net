<template>
  <div
    :class="['h-52 p-4 pb-8 sm:p-14 overflow-clip bg-center bg-no-repeat bg-gray-600 w-full', borderRadius]"
    :style="{
      'background-image': `linear-gradient(${gradient}, rgba(0, 0, 0, 0), rgba(31, 97, 153, 1)), url('${details.image}')`,
    }"
  >
    <div class="w-full h-full relative">
      <p
        :class="[
          'absolute',
          'bottom-0',
          textPosition,
          'text-white',
          'text-3xl',
          'font-bold',
        ]"
      >
        {{ details.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details", "orientation"],
  computed: {
    gradient() {
      if (this.orientation === "right") {
        return "to right";
      } else {
        return "to left";
      }
    },
    textPosition() {
      if (this.orientation === "right") {
        return "right-0";
      } else {
        return "left-0";
      }
    },
    borderRadius(){
      if (this.orientation === "right") {
        return 'rounded-br-3xl sm:rounded-br-4xl';
      } else {
        return 'rounded-bl-3xl sm:rounded-bl-4xl';
      }
      
    }
  },
};
</script>

<style lang="scss" scoped></style>
