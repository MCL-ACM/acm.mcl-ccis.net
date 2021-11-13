<template>
  <div class="card-bg">
    <div class="flex flex-row flex-wrap justify-center gap-4 bg-opacity-50">
      <MembersIconedMember
        v-for="(member, index) in members"
        :key="index"
        :class="[`w-54 ${index === 0 ? 'full-width' : ''}`]"
        v-bind="member"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["members"],
};
</script>

<style lang="scss" scoped>
.full-width {
  flex-basis: 100%;
}
.card-bg {
  background: linear-gradient(
    74.91deg,
    rgba(44, 193, 199, 0.8) -1.75%,
    rgba(217, 237, 146, 0.8) 127.5%,
    rgba(217, 237, 146, 0) 127.5%
  );
}
</style>
