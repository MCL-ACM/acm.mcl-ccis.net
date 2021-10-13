<template>
  <div class="h-32 bg-gray-100 p-5 overflow-clip bg-center bg-no-repeat" :style="{'background-image': `url('${details.image}')`}">
    {{details.title}}
  </div>
</template>

<script>
export default {
  props: ["details"]
};
</script>

<style lang="scss" scoped></style>
