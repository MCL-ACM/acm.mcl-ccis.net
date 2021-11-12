<template>
  <div class="flex flex-col items-center gap-10 mt-8">
    <div>
      <p class="font-bold text-3xl text-dark-blue mb-4">Events</p>
      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere proin
        at a elementum egestas morbi mauris. At pellentesque lacus pulvinar
        tortor, et libero a elementum enim.
      </p>
    </div>
    <div class="flex flex-col w-full gap-10 mb-2">
      <HomeEventItem
        v-for="(preview, index) in eventPreviews"
        :key="index"
        :details="preview"
        :orientation="index % 2 == 0 ? 'right' : 'left'"
        alignment="left"
      />
    </div>
    <Button text="Show More" class="px-10" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventPreviews: [
        {
          id: 1,
          title: "CodeX",
          image: "/content/codex-logo.png",
        },
        {
          id: 2,
          title: "Hour of Code",
          image: "/content/hour-of-code.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
