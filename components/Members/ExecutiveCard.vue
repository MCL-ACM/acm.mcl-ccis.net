<template>
  <div>
    <div class=""></div>
    <div class="flex flex-row flex-wrap justify-center gap-4 bg-gray-500 bg-opacity-50">
      <MembersIconedMember
        v-for="(member, index) in members"
        :key="index"
        :class="[`w-52 ${index === 0 ? 'full-width' : ''}`]"
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
</style>
