<template>
  <div class="flex flex-col gap-10 mt-8">
    <!-- Header -->
    <div>
      <h1 class="font-bold text-5xl text-dark-blue mb-4">Events</h1>
      <p class="text-lg">
        MCL-ACM aims to serve as a tool in introducing programming to students and in helping them enhance their skills 
        while having fun at the same time.
      </p>
    </div>

    <!-- Event Items -->
    <div class="flex flex-col w-full gap-10 mb-2">
      <HomeEventItem
        v-for="(preview, index) in eventPreviews"
        :key="index"
        :details="preview"
        :orientation="index % 2 == 0 ? 'right' : 'left'"
        alignment="left"
      />
    </div>

    <!-- Show More -->
    <NuxtLink to="events" class="mx-auto">
      <Button text="Show More" class="px-10" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventPreviews: [
        {
          title: "CodeX",
          image: "/content/codex-logo.png",
          link:"",
        },
        {
          title: "Hour of Code",
          image: "/content/hoc.jpg",
          link:"",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
