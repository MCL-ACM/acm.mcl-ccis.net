<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col container mx-auto px-5 lg:px-20">
      <div class="">
        <img
          src="@/assets/mcl-acm-logo.png"
          alt="MCL-ACM Logo"
          class="w-80 h-auto mt-10"
        />
        <p class="font-bold text-5xl leading-tight">
          Malayan Colleges Laguna <br />
          ACM Student Chapter
        </p>
      </div>
      <div>
        <p class="text-lg font-bold">
          Est. 2018
        </p>
      </div>
      <div class="text-right mt-20">
        <p class="text-xl">Promoting Excellence in Modern Computing</p>
        <p class="text-lg">A platform for students and enthusiasts alike</p>
      </div>
    </div>
    <div
      class="flex flex-col container mx-auto px-5 lg:px-20 items-center text-center"
    >
      <p class="font-bold text-3xl">About Us</p>
      <p class="max-w-4xl text-xl p-4 mt-4 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ultricies
        habitant id porttitor etiam sem commodo, blandit sit. Fringilla est amet
        pellentesque massa purus vel pretium velit. Ipsum varius urna varius
        iaculis massa quis. Diam molestie nisl ultricies ultrices.
      </p>
      <Button text="Learn more about MCL-ACM" />
    </div>
    <div class="flex flex-col container mx-auto px-5 lg:px-20">
      <div class="px-20">
        <EventItem
          v-for="(preview, index) in eventPreviews"
          :key="index"
          :details="preview"
          alignment="left"
        />
      </div>
    </div>
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
          image: "/content/codex-logo.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
