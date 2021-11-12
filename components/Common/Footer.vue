<template>
  <div>
    <div class="flex flex-col sm:flex-row lg:px-32 my-4 sm:my-20 px-8">
      <div class="flex flex-col items-start sm:text-left mb-3 items-center text-center sm:text-left sm:items-start mb-12">
        <img src="@/assets/mcl-acm-logo.png" alt="" class="w-auto h-20 mb-3" />
        <p class="font-bold text-lg">
          Malayan Colleges Laguna ACM Student Chapter
        </p>
        <p class="font-thin my-2">
          Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines
        </p>
        <p class="font-thin">mcl.acmstudchapter@gmail.com</p>
        <div class="flex flex-row mt-2 space-x-4">
          <div
            v-for="(item, index) in socialItems"
            :key="index"
            class="bg-black"
          >
            <a :href="item.link"
              ><div :src="item.icon" alt="" class="w-20 h-20"
            /></a>
          </div>
        </div>
      </div>
      <div class="sm:ml-auto sm:mr-20 text-center sm:text-left">
        <ul class="flex flex-col flex-wrap">
          <p
            v-for="(item, index) in footerItems"
            :key="index"
            class="text-lg underline mb-4 font-medium text-blue"
          >
            <a :href="item.link">{{ item.name }}</a>
          </p>
        </ul>
      </div>
    </div>
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
        link: "https://fb.me/acmMCL",
        icon: "/icons/facebook.svg",
      },
      {
        link: "https://www.instagram.com/acm_mcl/",
        icon: "/icons/facebook.svg",
      },
      {
        link: "https://twitter.com/MCL_ACM",
        icon: "/icons/facebook.svg",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
