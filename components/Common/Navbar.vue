<template>
  <nav class="z-50">
    <!-- Navbar -->
    <div
      class="
        flex flex-row
        items-center
        justify-between
        mx-2
        h-20
        sm:mx-auto
        sm:px-8
        lg:px-32
      "
    >
      <!-- Logo -->
      <div>
        <NuxtLink to="/">
          <img
            class="block h-12 w-auto logo-shadow"
            src="@/assets/mcl-acm-logo.png"
            alt="MCL-ACM Logo"
          />
        </NuxtLink>
      </div>

      <!-- Wide Links -->
      <div class="flex-row content-evenly ml-auto hidden sm:flex gap-3">
        <NuxtLink
          v-for="(navitem, index) in navitems"
          :key="index"
          :to="navitem.link.toString()"
          class="
            text-white
            transition
            duration-100
            ease-in-out
            hover:bg-gray-400 hover:bg-opacity-30
            px-3
            py-2
            rounded-md
            font-medium
            drop-shadow-lg
            text-shadow text-center
          "
        >
          {{ navitem.title }}
        </NuxtLink>
      </div>

      <!-- Hamburger Button -->
      <CommonNavitemHamburger class="sm:hidden" @Clicked="toggleMobileMenu()" />
    </div>

    <!-- Mobile Links -->
    <div
      v-show="mobileMenuVisible"
      class="bg-light-green text-center p-2 sm:hidden"
    >
      <NuxtLink
        v-for="(navitem, index) in navitems"
        :key="index"
        :to="navitem.link.toString()"
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
      </NuxtLink>
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
  transition: filter 0.1s ease;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.2));
}
.logo-shadow:hover {
  transition: filter 0.1s ease;
  filter: drop-shadow(4px 4px 7px rgba(0, 0, 0, 0.3));
}

.text-shadow {
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
}
</style>
