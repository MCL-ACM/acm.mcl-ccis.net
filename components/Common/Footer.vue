<template>
  <div>
    <div class="flex flex-col my-4 px-8 sm:flex-row sm:my-20 lg:px-32">
      <!-- Contact Information -->
      <div
        class="
          flex flex-col
          items-center
          text-center
          sm:text-left sm:items-start
          mt-4
          mb-8
        "
      >
        <!-- Information -->
        <img src="@/assets/mcl-acm-logo.png" alt="" class="w-auto h-16 mb-3" />
        <p class="font-bold text-lg">
          Malayan Colleges Laguna ACM Student Chapter
        </p>
        <p class="font-thin my-2">
          Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines
        </p>
        <p class="font-thin">acm.mclstudchapter@gmail.com</p>

        <!-- Social Icons -->
        <div class="flex flex-row space-x-6 mt-4">
          <div v-for="(item, index) in socialItems" :key="index">
            <div class="bg-blue h-14 w-14 p-4 rounded-full">
              <a :href="item.link">
                <img :src="item.icon" :alt="item.name" class="h-full w-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="sm:ml-auto sm:mr-20 text-center sm:text-left">
        <ul class="flex flex-col flex-wrap">
          <p
            v-for="(item, index) in footerItems"
            :key="index"
            class="text-lg underline mb-4 font-medium text-blue"
          >
            <NuxtLink :to="item.link.toString()">{{ item.name }}</NuxtLink>
          </p>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center py-2 bg-gray-800 text-white">
      © 2021 Malayan Colleges Laguna ACM Student Chapter
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    footerItems: [
      {
        link: "/Home",
        name: "Home",
      },
      {
        link: "/Home",
        name: "About",
      },
      {
        link: "/Home",
        name: "Events",
      },
      {
        link: "/Home",
        name: "Members",
      },
      {
        link: "/Home",
        name: "Contact",
      },
    ],
    socialItems: [
      {
        name: "Facebook",
        link: "https://fb.me/acmMCL",
        icon: "/icons/facebook.svg",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/acm_mcl/",
        icon: "/icons/instagram.svg",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/MCL_ACM",
        icon: "/icons/twitter.svg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
