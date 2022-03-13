<template>
  <MembersCardItem
    class="
      grid
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      justify-evenly
      content-start
      flex-grow
      mx-8
      text-center
      mt-4
    "
  >
    <p v-for="(name, index) in names" :key="index" class="mb-8 text-lg">
      {{ name }}
    </p>
  </MembersCardItem>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.card-bg {
  background: linear-gradient(
    74.91deg,
    rgba(44, 193, 199, 0.8) -1.75%,
    rgba(217, 237, 146, 0.8) 127.5%,
    rgba(217, 237, 146, 0) 127.5%
  );
}
</style>
