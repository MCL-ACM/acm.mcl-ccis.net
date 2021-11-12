<template>
  <div>
    <div class="flex flex-row lg:px-32 my-20">
      <div>
        <img src="@/assets/mcl-acm-logo.png" alt="" class="w-auto h-24 mb-3" />
        <p class="font-bold text-lg">
          Malayan Colleges Laguna ACM Student Chapter
        </p>
        <p class="font-thin my-2">
          Pulo Diezmo Rd, Pulo, Cabuyao, Laguna 4026, Philippines
        </p>
        <p class="font-thin">mcl.acmstudchapter@gmail.com</p>
        <div class="flex flex-row mt-2">
          <div
            v-for="(item, index) in socialItems"
            :key="index"
            class="bg-black mr-6"
          >
            <a :href="item.link"
              ><div :src="item.icon" alt="" class="w-20 h-20"
            /></a>
          </div>
        </div>
      </div>
      <div class="ml-auto sm:mr-20">
        <ul>
          <li
            v-for="(item, index) in footerItems"
            :key="index"
            class="text-lg underline mb-3 text-light-blue"
          >
            <a :href="item.link">{{ item.name }}</a>
          </li>
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
