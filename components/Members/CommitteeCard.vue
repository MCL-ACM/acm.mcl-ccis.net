<template>
  <MembersCardItem class="flex flex-col sm:flex-row">
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
        mt-4
        text-center
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
  </MembersCardItem>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default: () => ({
        committeeChair: "",
        members: [],
      }),
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
