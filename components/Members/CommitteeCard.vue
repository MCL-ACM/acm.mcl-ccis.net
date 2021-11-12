<template>
  <div class="flex flex-row bg-gray-500 bg-opacity-50 p-5">
    <MembersIconedMember class="w-64 my-auto" v-bind="details.committeeChair" />
    <div class="grid grid-cols-2 justify-evenly flex-grow content-start mx-8 text-center mt-4">
      <p v-for="(member, index) in details.members" :key="index" class="mb-8">
        {{ member }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"],
};
</script>

<style lang="scss" scoped></style>
