<template>
  <button
    type="button"
    class="
      inline-flex
      items-center
      justify-center
      p-2
      rounded-md
      text-white
      hover:text-white hover:bg-gray-700
      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
    "
    aria-controls="mobile-menu"
    aria-expanded="false"
    @click="$emit('Clicked')"
  >
    <span class="sr-only">Open main menu</span>
    <!--
            Icon when menu is closed.
            Heroicon name: outline/menu
            Menu open: "hidden", Menu closed: "block"
          -->
    <svg
      class="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <svg
      class="hidden h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
