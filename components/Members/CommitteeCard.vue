<template>
  <div class="flex flex-col sm:flex-row bg-opacity-50 p-8 card-bg">
    <MembersIconedMember
      class="sm:w-64 my-auto"
      v-bind="details.committeeChair"
    />
    <div
      class="
        grid
        sm:grid-cols-2
        justify-evenly
        content-start
        flex-grow
        mx-8
        text-center
        mt-4
      "
    >
      <p
        v-for="(member, index) in details.members"
        :key="index"
        class="mb-8 text-lg"
      >
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
