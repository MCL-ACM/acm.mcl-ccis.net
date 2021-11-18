<template>
  <div class="flex flex-row ml-auto h-64 z-10 relative">

    <!-- Diamond Decoration -->
    <img
      src="@/assets/svg/contact-us-diamond.svg"
      alt=""
      class="contact-us-detail h-28 sm:h-56"
    />
    <!-- Main Content of Contact Us -->
    <div class="mx-auto my-auto sm:ml-auto sm:mr-14">
      <NuxtLink
        to="/contact-us"
        class="
          flex flex-row
          items-center
          font-bold
          text-white
          rounded-lg
          text-4xl
          p-4
          hover:bg-gray-200 hover:bg-opacity-10
        "
      >
        <p class="mr-2 z-20 mt-0">Contact Us</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-us-detail {
  position: absolute;
  left: 2%;
  top: 0;
}
</style>
