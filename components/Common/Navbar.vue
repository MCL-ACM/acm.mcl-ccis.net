<template>
  <nav>
    <!-- Navbar -->
    <div
      class="
        flex flex-row
        items-center
        justify-between
        max-w-7xl
        mx-2
        h-16
        sm:mx-auto
      "
    >
      <!-- Logo -->
      <div>
        <a href="/">
          <img
            class="block h-10 w-auto logo-shadow"
            src="@/assets/mcl-acm-logo.png"
            alt="MCL-ACM Logo"
          />
        </a>
      </div>

      <!-- Wide Links -->
      <div class="flex-row content-evenly ml-auto hidden sm:flex gap-3">
        <a
          v-for="(navitem, index) in navitems"
          :key="index"
          :href="navitem.link"
          class="
            text-white
            transition
            duration-100
            ease-in-out
            hover:bg-gray-400 hover:bg-opacity-30
            px-3
            py-2
            rounded-md
            text-base
            font-medium
            drop-shadow-lg
            text-shadow text-center
          "
        >
          {{ navitem.title }}
        </a>
      </div>

      <!-- Hamburger Button -->
      <CommonNavitemHamburger class="sm:hidden" @Clicked="toggleMobileMenu()" />
    </div>

    <!-- Mobile Links -->
    <div
      v-show="mobileMenuVisible"
      class="bg-light-green text-center p-2 sm:hidden"
    >
      <a
        v-for="(navitem, index) in navitems"
        :key="index"
        :href="navitem.link"
        class="
          block
          text-lg
          font-medium
          rounded-md
          px-3
          py-2
          mb-2
          hover:bg-gray-700 hover:bg-opacity-40 hover:text-white
        "
        >{{ navitem.title }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    mobileMenuVisible: false,
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
        link: "/contact-us",
      },
    ],
  }),
  methods: {
    toggleMobileMenu() {
      this.mobileMenuVisible = !this.mobileMenuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-shadow {
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.2));
}
.text-shadow {
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
}
</style>
