<template>
  <div class="flex flex-row bg-gray-500 bg-opacity-50 p-5">
    <div class="grid grid-cols-4 justify-evenly content-start flex-grow mx-8 text-center mt-4">
      <p v-for="(name, index) in names" :key="index" class="mb-8">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["names"],
};
</script>

<style lang="scss" scoped></style>
