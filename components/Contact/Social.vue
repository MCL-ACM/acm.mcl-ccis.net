<template>
  <section class="bg-white p-10 rounded-3xl shadow-xl">
      <h1 class="text-2xl font-bold mb-6 text-black">Social Media</h1>
        <div class="flex flex-row w-full sm:flex-col sm:space-y-6 ">
            <div v-for="(item, index) in socialItems" :key="index" class="justify-center sm:justify-start flex flex-grow flex-row items-center space-x-4">
                <div class="bg-blue h-14 w-14 p-4 rounded-full transition duration-75 transform hover:scale-105 hover:shadow-lg">
                    <a :href="item.link">
                        <img :src="item.icon" :alt="item.name" class="h-full w-auto" />
                    </a>
                </div>
                <a :href="item.link" class="font-extralight tracking-widest space-x-4 sm:flex hidden">
                    {{ item.link }}
                </a>
            </div>
        </div>
  </section>
</template>

<script>
export default {
data: ()=>({
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
    ]
})
}
</script>

<style>

</style>