<template>
  <NuxtLink to="link">
    <div
      :class="`bg-center bg-no-repeat bg-gray-600 overflow-clip w-full h-52 overflow-hidden ${borderRadius} bg-grow`"
      :style="`background-image: url('${details.image}')`"
    >
      <div :class="`p-4 pb-8 sm:p-14 h-full w-full ${gradient}`">
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
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default: () => ({
        title: "Placeholder Title",
        image: "",
        link: "/",
      }),
    },
    orientation: {
      type: String,
      default: "right",
    },
  },
  computed: {
    gradient() {
      if (this.orientation === "right") {
        return "gradient-right";
      } else {
        return "gradient-left";
      }
    },
    textPosition() {
      if (this.orientation === "right") {
        return "right-0";
      } else {
        return "left-0";
      }
    },
    borderRadius() {
      if (this.orientation === "right") {
        return "rounded-br-3xl sm:rounded-br-4xl";
      } else {
        return "rounded-bl-3xl sm:rounded-bl-4xl";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(31, 97, 153, .8)
  );
}

.gradient-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(31, 97, 153, .8)
  );
}

.bg-grow{
  transition: all .5s ease;
}

.bg-grow:hover{
}


</style>
