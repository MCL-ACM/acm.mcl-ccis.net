<template>
  <nav>
    <div
      class="mx-auto max-w-7xl h-16 flex flex-row items-center justify-between"
    >
      <div>
        <img
          class="block h-10 w-auto logo-shadow"
          src="@/assets/mcl-acm-logo.png"
          alt="MCL-ACM Logo"
        />
      </div>
      <div class="ml-auto hidden sm:block flex flex-row content-evenly">
        <a
          v-for="(navitem, index) in navitems"
          :key="index"
          :href="navitem.link"
          class="
            text-white
            hover:bg-gray-500 hover:bg-opacity-30
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

      <CommonNavbarHamburger class="sm:hidden" @Clicked="toggleMobileMenu()" />
    </div>

    <div v-show="mobileMenuVisible" class="sm:hidden bg-gray-500">
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
        link: "/contact",
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
