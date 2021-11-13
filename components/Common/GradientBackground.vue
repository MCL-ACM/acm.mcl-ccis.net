<template>
  <div class="absolute bg-gradient h-screen w-full top-0"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(
    to bottom,
    rgba(44, 193, 199, 0.8) 0%,
    rgba(217, 237, 146, 0.25) 70%,
    rgba(217, 237, 146, 0) 100%
  );
  z-index: -1;
}
</style>
