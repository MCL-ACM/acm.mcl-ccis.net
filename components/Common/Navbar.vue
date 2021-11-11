<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
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
            <!--
            Icon when menu is open.
            Heroicon name: outline/x
            Menu open: "block", Menu closed: "hidden"
          -->
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
        </div>
        <div class="flex-1 flex flex-row">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-10 w-auto logo-shadow"
              src="@/assets/mcl-acm-logo.png"
              alt="MCL-ACM Logo"
            />
            <img
              class="hidden lg:block h-10 w-auto logo-shadow"
              src="@/assets/mcl-acm-logo.png"
              alt="MCL-ACM Logo"
            />
          </div>

          <div class="hidden sm:block ml-auto">
            <div class="flex space-x-4">
              <a
                v-for="(navitem, index) in navitems"
                :key="index"
                :href="navitem.link"
                class="
                  text-white
                  hover:bg-gray-700 hover:bg-opacity-40
                  px-3
                  py-2
                  rounded-md
                  text-base
                  font-medium
                  drop-shadow-lg
                  text-shadow
                "
              >
                {{ navitem.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 mx-l-auto">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

        <a
          v-for="(navitem, index) in navitems"
          :key="index"
          :href="navitem.link"
          class="
            hover:bg-gray-700 hover:bg-opacity-40 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          >{{ navitem.title }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navitems: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Events",
        link: "/events",
      },
      {
        title: "Members",
        link: "/members",
      },
      {
        title: "Contact",
        link: "/contact",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.logo-shadow{
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.2));
}
.text-shadow {
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
}
</style>
